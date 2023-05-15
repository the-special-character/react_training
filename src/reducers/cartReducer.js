const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_CART_REQUEST':
    case 'ADD_CART_REQUEST':
    case 'UPDATE_CART_REQUEST':
    case 'DELETE_CART_REQUEST':
      return { ...state, isLoading: true }

    case 'LOAD_CART_SUCCESS':
      return { ...state, isLoading: false, data: payload }

    case 'ADD_CART_SUCCESS':
      return { ...state, isLoading: false, data: [...state.data, payload] }

    case 'UPDATE_CART_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id)
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.slice(0, index),
          payload,
          ...state.data.slice(index + 1),
        ],
      }
    }

    case 'DELETE_CART_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id)
      return {
        ...state,
        isLoading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      }
    }

    case 'LOAD_CART_FAIL':
    case 'ADD_CART_FAIL':
    case 'UPDATE_CART_FAIL':
    case 'DELETE_CART_FAIL':
      return { ...state, isLoading: false, error: payload }

    default:
      return state
  }
}
