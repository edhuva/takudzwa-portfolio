import React, { useState } from 'react'
import { useVideos } from "../context/VideoContext";

const UpdateVideo = ({ video }) => {
    const { updateVideo } = useVideos();
    const [title, setTitle] = useState(video.title);
    const [category, setCategory] = useState(video.category);
    const [description, setDescription] = useState(video.description);
    const [newVideo, setNewVideo] = useState(null);
    const [newThumbnail, setNewThumbnail] = useState(null);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (newVideo) formData.append("video", newVideo);
        if (newThumbnail) formData.append("thumbnail", newThumbnail);
        formData.append("title", title);
        formData.append("category", category);
        formData.append("description", description);

        await updateVideo(video._id, formData);
    }

  return (
    <form onSubmit={handleUpdate}>
      <input type="file" onChange={(e) => setNewVideo(e.target.files[0])} />
      <input type="file" onChange={(e) => setNewThumbnail(e.target.files[0])} />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update Video</button>
  </form>
  )
}

export default UpdateVideo
