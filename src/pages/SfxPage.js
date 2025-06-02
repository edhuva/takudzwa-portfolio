import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'

const SfxPage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='SFX videos' category='sfx' />
    </>
  )
}

export default SfxPage
