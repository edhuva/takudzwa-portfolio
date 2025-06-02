import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'

const InstagramPage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='Instagram videos' category='instagram' />
    </>
  )
}

export default InstagramPage
