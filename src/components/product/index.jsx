import { connect } from 'react-redux'
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
  addToCart: payload =>
    dispatch({
      type: 'ADD_CART_REQUEST',
      payload,
      meta: { loadingId: payload.id },
    }),
  updateCart: payload =>
    dispatch({
      type: 'UPDATE_CART_REQUEST',
      payload,
      meta: { loadingId: payload.productId },
    }),
  deleteCart: payload =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload,
      meta: { loadingId: payload.productId },
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
