import { connect } from 'react-redux'
import {
  addCartItemRequest,
  deleteCartItemRequest,
  updateCartItemRequest,
} from '../../actions/cartActions'
import Product from './product'

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isAdding: loading.some(
    x => x.actionType === 'ADD_CART' && x.loadingId === product.id
  ),
  isUpdating: loading.some(
    x => x.actionType === 'UPDATE_CART' && x.loadingId === product.id
  ),
  isDeleting: loading.some(
    x => x.actionType === 'DELETE_CART' && x.loadingId === product.id
  ),
})

const mapDispatchToProps = dispatch => ({
  addToCart: product => addCartItemRequest(product)(dispatch),
  updateCart: cartItem => updateCartItemRequest(cartItem)(dispatch),
  deleteCart: cartItem => deleteCartItemRequest(cartItem)(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
