import React, { useState } from "react";
import { useVideos } from "../context/VideoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const UploadVideo = ({ onHomePage }) => {
  const { uploadVideo } = useVideos();
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && !["video/mp4", "video/x-matroska"].includes(file.type)) {
      setError("Only .mp4 and .mkv video files are allowed.");
      setVideo(null);
    } else {
      setError("");
      setVideo(file);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "image/png") {
      setError("Only .png image files are allowed for thumbnails.");
      setThumbnail(null);
    } else {
      setError("");
      setThumbnail(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!video || !thumbnail) {
      setError("Both a valid video and thumbnail file are required.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("thumbnail", thumbnail);
    formData.append("title", title.toLowerCase());
    formData.append("category", category.toLowerCase());
    formData.append("description", description);

    setError("");
    await uploadVideo(formData);
  };

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-white mb-4">Upload a New Video</h2>

      {error && <p className="text-red-400 mb-4 text-sm font-medium">{error}</p>}

      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        {/* Video Input */}
        <label className="text-gray-300">
          Video File (.mp4, .mkv):
          <input
            type="file"
            accept=".mp4, .mkv"
            className="block w-full mt-1 p-2 text-sm text-gray-300 bg-gray-700 rounded-md border border-gray-600"
            onChange={handleVideoChange}
            disabled={!!video}
          />
        </label>

        {video && (
          <div className="flex items-center justify-between bg-gray-700 p-2 px-4 rounded-md text-sm text-gray-200">
            <span>{video.name}</span>
            <button
              type="button"
              onClick={() => setVideo(null)}
              className="text-red-400 hover:text-red-500 ml-4"
              title="Remove video"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        )}

        {/* Thumbnail Input */}
        <label className="text-gray-300">
          Thumbnail (.png only):
          <input
            type="file"
            accept=".png"
            className="block w-full mt-1 p-2 text-sm text-gray-300 bg-gray-700 rounded-md border border-gray-600"
            onChange={handleThumbnailChange}
            disabled={!!thumbnail}
          />
        </label>

        {thumbnail && (
          <div className="flex items-center justify-between bg-gray-700 p-2 px-4 rounded-md text-sm text-gray-200">
            <span>{thumbnail.name}</span>
            <button
              type="button"
              onClick={() => setThumbnail(null)}
              className="text-red-400 hover:text-red-500 ml-4"
              title="Remove thumbnail"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        )}

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Category Input */}
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Description Input */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Upload Video
        </button>
      </form>
    </section>
  );
};

export default UploadVideo;