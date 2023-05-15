const sessionUser = sessionStorage.getItem('user')

const initialState = sessionUser ? JSON.parse(sessionUser) : null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...payload }

    case 'REGISTER_SUCCESS':
      return { ...state, ...payload }

    case 'logout':
      return null

    default:
      return state
  }
}
