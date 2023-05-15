import { connect } from 'react-redux'
import { deleteCartItemRequest } from '../../actions/cartActions'
import CartItem from './cartItem'

const mapStateToProps = ({ products, loading }, { cartItem }) => ({
  product: products.find(x => x.id === cartItem.productId),
  isDeleting: loading.some(
    x => x.actionType === 'DELETE_CART' && x.loadingId === cartItem.productId
  ),
})

const mapDispatchToProps = dispatch => ({
  deleteCart: cartItem => deleteCartItemRequest(cartItem)(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
