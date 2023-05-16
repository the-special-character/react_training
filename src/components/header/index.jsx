import { connect } from 'react-redux'
import Header from './header'

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'logout' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
