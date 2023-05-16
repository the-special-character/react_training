import { connect } from 'react-redux'
import Home from './home'

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () =>
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST', meta: { loadingId: -1 } }),
  loadCart: () =>
    dispatch({ type: 'LOAD_CART_REQUEST', meta: { loadingId: -1 } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
