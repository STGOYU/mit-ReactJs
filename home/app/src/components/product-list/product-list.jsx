import React from 'react'
import ProductCard from '../product-card/product-card'
import data from "./data.json"

const ProductList = () => {
  return (
    <div>
        {data.map( product => <ProductCard {...product}/>)}
    </div>
  )
}

export default ProductList