// import React, { useState, useRef, useCallback, useMemo } from 'react';
import React, { useState, useCallback, useMemo } from 'react';
import { PulseLoader } from 'react-spinners';
import { useVideos } from '../../context/VideoContext';
import VideoModal from './VideoModal';

const VideoPlay = ({ onHomePage, category }) => {
  const { videos, isLoading, isError } = useVideos();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoFiltering, setIsVideoFiltering] = useState(false);

  // Memoized filtered videos
  const filteredVideos = useMemo(() => {
    setIsVideoFiltering(true); // Start filtering
    const filtered = videos.filter((video) => video.category === category);
    // Simulate a delay for filtering (e.g., 1 second)
    setTimeout(() => setIsVideoFiltering(false), 100);
    return filtered;
  }, [videos, category]);

  // Handle video selection
  const handleVideoClick = useCallback((video) => {
    if (isVideoLoading) return; // Prevent new selection while loading
    setCurrentVideo(video);
    setIsVideoLoading(true);
  }, [isVideoLoading]);

  // Close Video Function
  const closeVideo = useCallback(() => {
    setCurrentVideo(null);
    setIsVideoLoading(false);
  }, []);

  if (isLoading || isVideoFiltering)
    return <PulseLoader color="#81AFDD" className="flex justify-center" />;

  if (isError)
    return <p className="text-center text-red-500 text-lg">{isError}</p>;

  return (
    <div className={`flex flex-col justify-center px-auto md:px-24 ${onHomePage ? 'mt-0' : 'mt-7'}`} id="about">
      {filteredVideos?.length === 0 ? (
        <div className="flex justify-center text-white text-xl">
          <p>No videos to play now!</p>
        </div>
      ) : (
        <>
          <div className={filteredVideos.length > 1 ? "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center" : 'flex justify-center w-full sm:max-w-md sm:mx-auto'}>
            {filteredVideos.map((video) => (
              <div
                key={video._id}
                className={`block bg-gray-800 p-2 rounded-lg hover:bg-gray-700 text-center cursor-pointer 
                  ${isVideoLoading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable click effect while loading
                onClick={() => handleVideoClick(video)}
              >
                <img
                  src={video.thumbnail || "/fallback-thumbnail.jpg"}
                  alt={video.title}
                  className="rounded-lg shadow-lg hover:opacity-80 w-full object-cover"
                  onError={(e) => e.target.src = "/fallback-thumbnail.jpg"}
                />
              </div>
            ))}
          </div>

          {/* Video Modal */}
          {currentVideo && (
            <VideoModal
              currentVideo={currentVideo}
              onClose={closeVideo}
              isVideoLoading={isVideoLoading}
              setIsVideoLoading={setIsVideoLoading} // Pass setIsVideoLoading as a prop
            />
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(VideoPlay);