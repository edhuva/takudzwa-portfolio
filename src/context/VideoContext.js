import { createContext, useContext, useEffect, useState, useRef } from "react";
import useAxios from "../hooks/useAxios";

const VideoContext = createContext();

// export const VideoProvider = ({ children, navigate }) => {
    export const VideoProvider = ({ children, navigate }) => {
   
    // const axiosInstance = useAxios(navigate);
    const axiosInstance = useAxios(navigate);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
   

    // Track if the component is mounted
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false; // Set to false when unmounting
        };
    }, []);

    // Load videos
    useEffect(() => {
        const getVideos = async () => {
            setIsLoading(true);
            setIsError(null)
            try {
                const response = await axiosInstance.get('/videos');
                
                if (isMounted.current) {
                    setVideos(response.data);
                }
            } catch (err) {
                if (isMounted.current) {
                    setIsError(err.response?.data?.message || "Error fetching videos");
                }
            } finally {
                if (isMounted.current) {
                    setIsLoading(false);
                }
            }
        };

        getVideos();
    }, [axiosInstance]);

    // Upload video
    const uploadVideo = async (FormData) => {
        setIsLoading(true);
        setIsError(null)
        try {
            const response = await axiosInstance.post('/videos/upload', FormData);
            if (isMounted.current) {
                setVideos((prevVideos) => [...prevVideos, response.data.video]); // Add new video to state
            }
        } catch (err) {
            if (isMounted.current) {
                setIsError(err.response?.data?.message || "Error uploading video");
            }
        } finally {
            if (isMounted.current) {
                setIsLoading(false);
            }
        }
    };

    // Update video
    const updateVideo = async (id, FormData) => {
        setIsLoading(true);
        setIsError(null)
        try {
            const response = await axiosInstance.put(`videos/update/${id}`, FormData);
            
            if (isMounted.current) {
                setVideos((prevVideos) =>
                    prevVideos.map((vid) => (vid._id === id ? response.data.video : vid))
                );
            }
        } catch (err) {
            if (isMounted.current) {
                setIsError(err.response?.data?.message || "Error updating video");
            }
        } finally {
            if (isMounted.current) {
                setIsLoading(false);
            }
        }
    };

    // Delete video
    const deleteVideo = async (id) => {
        setIsLoading(true);
        setIsError(null)
        try {
            await axiosInstance.delete(`/videos/${id}`);

            if (isMounted.current) {
                setVideos((prevVideos) => prevVideos.filter((video) => video._id !== id));
            }
        } catch (err) {
            if (isMounted.current) {
                setIsError(err.response?.data?.message || "Error deleting video");
            }
        } finally {
            if (isMounted.current) {
                setIsLoading(false);
            }
        }
    };

    return (
        <VideoContext.Provider value={{ videos, isLoading, isError, uploadVideo, updateVideo, deleteVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

// Custom hook to use VideoContext
export const useVideos = () => useContext(VideoContext);