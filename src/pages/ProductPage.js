import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()
  return (
    <div className='main-section'>
      <h2>Product Detials</h2>
      <p>Product ID: {id} </p>
    </div>
  )
}

export default ProductPage
