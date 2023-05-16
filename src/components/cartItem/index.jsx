import { connect } from 'react-redux'
import CartItem from './cartItem'

const mapStateToProps = ({ products, loading }, { cartItem }) => ({
  product: products.find(x => x.id === cartItem.productId),
  isDeleting: loading.some(
    x => x.actionType === 'DELETE_CART' && x.loadingId === cartItem.productId
  ),
})

const mapDispatchToProps = dispatch => ({
  deleteCart: payload =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload,
      meta: { loadingId: payload.productId },
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
