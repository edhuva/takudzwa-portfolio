import React, { useState, useRef, useCallback } from 'react';
import { PulseLoader } from 'react-spinners';

// Separate Video Modal Component for Code Splitting
const VideoModal = React.memo(({ currentVideo, onClose, isVideoLoading, setIsVideoLoading }) => {
    const videoRef = useRef(null);
    const [isBuffering, setIsBuffering] = useState(false); // Track buffering state
  
    // Close Video Function
    const handleClose = useCallback(() => {
      if (videoRef.current) {
        try {
          videoRef.current.pause(); // Pause the video
          videoRef.current.src = ""; // Clear the video source
          videoRef.current.removeAttribute("src"); // Remove the source attribute
          videoRef.current.load(); // Force reload to stop any ongoing fetch
        } catch (error) {
          console.log("Video cleanup error:", error); // Suppress the error
        }
      }
      onClose();
    }, [onClose]);
  
    // Handle video events
    const handleCanPlay = useCallback(() => {
      setIsVideoLoading(false); // Video is ready to play
      setIsBuffering(false); // Reset buffering state
    }, [setIsVideoLoading]);
  
    const handleWaiting = useCallback(() => setIsBuffering(true), []); // Video is buffering
    const handlePlaying = useCallback(() => setIsBuffering(false), []); // Video is playing
    const handleError = useCallback(() => {
      setIsVideoLoading(false); // Reset loading state on error
      setIsBuffering(false); // Reset buffering state on error
    }, [setIsVideoLoading]);
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4" onClick={handleClose}>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
          {/* Overlay to block interactions while loading or buffering */}
          {(isVideoLoading || isBuffering) && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              {isVideoLoading ? <PulseLoader color="#81AFDD" style={{ margin: '0em 0em 0em 5em' }} /> : <p className="text-white">Buffering...</p>}
            </div>
          )}
  
          {/* Video Element */}
          <video
            ref={videoRef}
            controls={!(isVideoLoading || isBuffering)} // Disable controls while loading or buffering
            preload="metadata"
            poster={currentVideo.thumbnail || "/fallback-thumbnail.jpg"}
            className="w-full rounded-lg"
            onCanPlay={handleCanPlay}
            onWaiting={handleWaiting}
            onPlaying={handlePlaying}
            onError={handleError}
          >
            <source src={currentVideo.videoUrl} type="video/mp4" />
          </video>
  
          {/* Close Button */}
          {!(isVideoLoading || isBuffering) && (
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg"
              onClick={handleClose}
            >
              ✖
            </button>
          )}
        </div>
      </div>
    );
});

export default VideoModal
