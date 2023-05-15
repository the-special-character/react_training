import React, { useEffect } from 'react'

import Product from '../../components/product'

function Home({ products, loadProducts, loadCart }) {
  useEffect(() => {
    loadProducts()
    loadCart()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {products.map(product => (
        <Product id={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home
