import { connect } from 'react-redux'
import { loadProductsRequest } from '../../actions/productsAction'
import { loadCartRequest } from '../../actions/cartActions'
import Home from './home'

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProductsRequest()(dispatch),
  loadCart: () => loadCartRequest()(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
