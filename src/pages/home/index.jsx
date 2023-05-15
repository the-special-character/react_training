import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadProductsRequest } from '../../actions/productsAction'
import { loadCartRequest } from '../../actions/cartActions'
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

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProductsRequest()(dispatch),
  loadCart: () => loadCartRequest()(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
