import axiosInstance from '../utils/axiosInstance'

export const loadProductsRequest = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST', meta: { loadingId: -1 } })
    const res = await axiosInstance.get('660/products')
    dispatch({
      type: 'LOAD_PRODUCTS_SUCCESS',
      payload: res,
      meta: {
        loadingId: -1,
      },
    })
  } catch (error) {
    dispatch({
      type: 'LOAD_PRODUCTS_FAIL',
      payload: error,
      meta: {
        message: error.message,
        loadingId: -1,
      },
    })
  }
}

export const b = 1
