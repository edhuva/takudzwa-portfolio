import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'
const WeddingPage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='Wedding videos' category='wedding' />
    </>
  )
}

export default WeddingPage
