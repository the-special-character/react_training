import axiosInstance from '../utils/axiosInstance'

export const loadCartRequest = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_CART_REQUEST', meta: { loadingId: -1 } })
    const res = await axiosInstance.get('660/cart')
    dispatch({
      type: 'LOAD_CART_SUCCESS',
      payload: res,
      meta: { loadingId: -1 },
    })
  } catch (error) {
    dispatch({
      type: 'LOAD_CART_FAIL',
      payload: error,
      meta: { loadingId: -1, message: error.message },
    })
  }
}

export const addCartItemRequest = data => async dispatch => {
  try {
    dispatch({ type: 'ADD_CART_REQUEST', meta: { loadingId: data.id } })
    const res = await axiosInstance.post('660/cart', {
      productId: data.id,
      quantity: 1,
    })
    dispatch({
      type: 'ADD_CART_SUCCESS',
      payload: res,
      meta: { loadingId: data.id },
    })
  } catch (error) {
    dispatch({
      type: 'ADD_CART_FAIL',
      payload: error,
      meta: { loadingId: data.id, message: error.message },
    })
  }
}

export const updateCartItemRequest = data => async dispatch => {
  try {
    dispatch({
      type: 'UPDATE_CART_REQUEST',
      meta: { loadingId: data.productId },
    })
    const res = await axiosInstance.put(`660/cart/${data.id}`, data)
    dispatch({
      type: 'UPDATE_CART_SUCCESS',
      payload: res,
      meta: { loadingId: data.productId },
    })
  } catch (error) {
    dispatch({
      type: 'UPDATE_CART_FAIL',
      payload: error,
      meta: { loadingId: data.productId, message: error.message },
    })
  }
}

export const deleteCartItemRequest = data => async dispatch => {
  try {
    dispatch({
      type: 'DELETE_CART_REQUEST',
      meta: { loadingId: data.productId },
    })
    await axiosInstance.delete(`660/cart/${data.id}`)
    dispatch({
      type: 'DELETE_CART_SUCCESS',
      payload: data,
      meta: { loadingId: data.productId },
    })
  } catch (error) {
    dispatch({
      type: 'DELETE_CART_FAIL',
      payload: error,
      meta: { loadingId: data.productId, message: error.message },
    })
  }
}

export const b = 1
