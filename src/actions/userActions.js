// import axiosInstance from '../utils/axiosInstance'

// export const loginRequest = data => async dispatch => {
//   try {
//     dispatch({ type: 'LOGIN_REQUEST', meta: { loadingId: -1 } })
//     const res = await axiosInstance.post('login', data)
//     sessionStorage.setItem('user', JSON.stringify(res))
//     dispatch({ type: 'LOGIN_SUCCESS', payload: res, meta: { loadingId: -1 } })
//   } catch (error) {
//     dispatch({
//       type: 'LOGIN_FAIL',
//       payload: error,
//       meta: { loadingId: -1, message: error.message },
//     })
//   }
// }

// export const registerRequest = data => async dispatch => {
//   try {
//     const { confirmPassword, ...rest } = data
//     dispatch({ type: 'REGISTER_REQUEST', meta: { loadingId: -1 } })
//     const res = await axiosInstance.post('register', rest)
//     sessionStorage.setItem('user', JSON.stringify(res))
//     dispatch({
//       type: 'REGISTER_SUCCESS',
//       payload: res,
//       meta: { loadingId: -1 },
//     })
//   } catch (error) {
//     dispatch({
//       type: 'REGISTER_FAIL',
//       payload: error,
//       meta: { loadingId: -1, message: error.message },
//     })
//   }
// }

// export const logoutRequest = () => dispatch => {
//   sessionStorage.clear()
//   dispatch({ type: 'logout' })
// }
