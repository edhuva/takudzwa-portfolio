import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'

const TiktokPage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='TikTok videos' category='tiktok' />
    </>
  )
}

export default TiktokPage
