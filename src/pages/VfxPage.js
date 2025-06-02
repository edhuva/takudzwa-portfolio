import React from 'react'
import VideosCategory from '../components/videoPlay/VideosCategory'

const VfxPage = () => {
  return (
    <>
      <VideosCategory onHomePage={false} title='VFX videos' category='vfx' />
    </>
  )
}

export default VfxPage
