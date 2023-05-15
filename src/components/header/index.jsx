import { connect } from 'react-redux'
import Header from './header'
import { logoutRequest } from '../../actions/userActions'

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  logout: () => logoutRequest()(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
