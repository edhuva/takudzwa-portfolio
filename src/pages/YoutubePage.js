import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'

const YoutubePage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='YouTube videos' category='youtube' />
    </>
  )
}

export default YoutubePage
