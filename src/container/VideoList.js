import React, { useState, useContext, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from 'react-spinners';
import { useVideos } from "../context/VideoContext";
import { AuthContext } from "../context/AuthContext";

// Separate Modal Component for Code Splitting
const VideoModal = React.memo(({ editingVideo, onClose, modalRef, onUpdate }) => {
  const [title, setTitle] = useState(editingVideo?.title || "");
  const [category, setCategory] = useState(editingVideo?.category || "");
  const [description, setDescription] = useState(editingVideo?.description || "");

  // Update form fields when editingVideo changes
  React.useEffect(() => {
    if (editingVideo) {
      setTitle(editingVideo.title);
      setCategory(editingVideo.category);
      setDescription(editingVideo.description);
    }
  }, [editingVideo]);

  const handleSubmit = () => {
    onUpdate(editingVideo._id, { title, category, description });
    onClose();
  };

  if (!editingVideo) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        ref={modalRef} 
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <h2 className="text-white text-xl mb-4">Update Video</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 rounded-md bg-gray-700 text-white mb-2"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-2 rounded-md bg-gray-700 text-white mb-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 rounded-md bg-gray-700 text-white mb-2"
        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded-md"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
});

const VideoList = ({ onHomePage, onExplore }) => {
  const { videos, isLoading, isError, deleteVideo, updateVideo } = useVideos();
  const { currentUser } = useContext(AuthContext);
  const [editingVideo, setEditingVideo] = useState(null);
  const [isVideoFiltering, setIsVideoFiltering] = useState(false); // Track filtering state
  const modalRef = useRef(null);

  const filteredVideos = useMemo(() => {
    setIsVideoFiltering(true);
  
    const sorted = [...videos].sort((a, b) => {
      const dateA = new Date(b.updatedAt || b.createdAt);
      const dateB = new Date(a.updatedAt || a.createdAt);
      return dateA - dateB;
    });
  
    const filtered = sorted.slice(0, onHomePage ? 9 : sorted.length);
  
    setTimeout(() => setIsVideoFiltering(false), 100);
    return filtered;
  }, [videos, onHomePage]);

  // Memoized handlers
  const handleEdit = useCallback((video) => setEditingVideo(video), []);
  const handleDelete = useCallback((id) => deleteVideo(id), [deleteVideo]);
  const handleUpdate = useCallback((id, updatedData) => updateVideo(id, updatedData), [updateVideo]);

  if (isLoading || isVideoFiltering)
    return < PulseLoader color="#81AFDD" className="text-center " />;
 
  if (isError)
    return <p className="text-center text-red-500 text-lg">{isError}</p>;

  return (
    <section className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white mb-6">{onExplore ? "Uploaded Videos" : "Explore Videos"}</h2>

      {filteredVideos.length === 0 ? (
        <p className="text-gray-400 text-center">No videos uploaded yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <li key={video._id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="w-full aspect-video relative">
                <video
                  className="w-full h-full object-cover rounded-md"
                  controls
                  preload="metadata"
                  poster={video.thumbnailUrl || "/fallback-thumbnail.jpg"}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-lg font-semibold capitalize">{video.title}</h3>
                <p className="text-sm text-gray-400 capitalize">{video.category}</p>
                <p className="text-sm mt-2">{video.description}</p>
                {currentUser && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleEdit(video)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md transition duration-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-md transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Update Form Modal */}
      <VideoModal
        editingVideo={editingVideo}
        onClose={() => setEditingVideo(null)}
        modalRef={modalRef}
        onUpdate={handleUpdate}
      />

      {onHomePage && <div className="flex justify-center my-10">
         <Link to='service'
           className="text-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
         >
           Explore More Videos
         </Link>
       </div>}
    </section>
  );
};

export default React.memo(VideoList);