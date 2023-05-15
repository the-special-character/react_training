const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return { ...state, isLoading: true }

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, isLoading: false, data: payload }

    case 'LOAD_PRODUCTS_FAIL':
      return { ...state, isLoading: false, error: payload }

    default:
      return state
  }
}
