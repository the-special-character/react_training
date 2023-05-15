import { connect } from 'react-redux'
import { deleteCartItemRequest } from '../../actions/cartActions'
import CheckoutPanel from './checkOutPanel'

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
})

export default connect(mapStateToProps)(CheckoutPanel)
