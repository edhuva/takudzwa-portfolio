import React from 'react'
import { VideoProvider } from './context/VideoContext'
import { useNavigate } from 'react-router-dom'
import App from './App'

const Root = () => {
    const navigate = useNavigate(); //Get the navigate function

  return (
    <VideoProvider navigate={navigate}> {/* Pass navigate to VideoProvider */}
        <App />
    </VideoProvider>
  )
}

export default Root
