import axiosInstance from '../utils/axiosInstance'

export const loadCartRequest = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_CART_REQUEST' })
    const res = await axiosInstance.get('660/cart')
    dispatch({ type: 'LOAD_CART_SUCCESS', payload: res })
  } catch (error) {
    dispatch({ type: 'LOAD_CART_FAIL', payload: error })
  }
}

export const addCartItemRequest = data => async dispatch => {
  try {
    dispatch({ type: 'ADD_CART_REQUEST' })
    const res = await axiosInstance.post('660/cart', {
      productId: data.id,
      quantity: 1,
    })
    dispatch({ type: 'ADD_CART_SUCCESS', payload: res })
  } catch (error) {
    dispatch({ type: 'ADD_CART_FAIL', payload: error })
  }
}

export const updateCartItemRequest = data => async dispatch => {
  try {
    dispatch({ type: 'UPDATE_CART_REQUEST' })
    const res = await axiosInstance.put(`660/cart/${data.id}`, data)
    dispatch({ type: 'UPDATE_CART_SUCCESS', payload: res })
  } catch (error) {
    dispatch({ type: 'UPDATE_CART_FAIL', payload: error })
  }
}

export const deleteCartItemRequest = data => async dispatch => {
  try {
    dispatch({ type: 'DELETE_CART_REQUEST' })
    await axiosInstance.delete(`660/cart/${data.id}`)
    dispatch({ type: 'DELETE_CART_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'DELETE_CART_FAIL', payload: error })
  }
}

export const b = 1
