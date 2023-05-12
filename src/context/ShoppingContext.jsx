import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import axiosInstance from '../utils/axiosInstance'
import { StatusContext } from './statusContext'

export const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const { addStatus } = useContext(StatusContext)

  const loadData = useCallback(async () => {
    const type1 = 'LOAD_PRODUCTS'
    const type2 = 'LOAD_CART'
    try {
      addStatus({
        type: `${type1}_REQUEST`,
        message: 'Products are loading...',
      })
      addStatus({
        type: `${type2}_REQUEST`,
        message: 'Cart Items are loading...',
      })
      const res = await Promise.all([
        axiosInstance.get('660/products'),
        axiosInstance.get('660/cart'),
      ])
      setProducts(res[0])
      setCart(res[1])
      addStatus({
        type: `${type1}_SUCCESS`,
        message: 'Products loaded successfully',
      })
      addStatus({
        type: `${type2}_SUCCESS`,
        message: 'Cart Items loaded successfully',
      })
    } catch (error) {
      addStatus({
        type: `${type1}_FAIL`,
        message: 'Unable to fetch products',
      })
      addStatus({
        type: `${type2}_FAIL`,
        message: 'Unable to fetch cart Items',
      })
    }
  }, [])

  const addToCart = useCallback(async product => {
    const type = 'ADD_CART'
    const { id } = product
    try {
      addStatus({
        type: `${type}_REQUEST`,
        message: 'Cart Item is Adding...',
        id,
      })
      const res = await axiosInstance.post('660/cart', {
        productId: product.id,
        quantity: 1,
      })
      setCart(val => [...val, res])
      addStatus({
        type: `${type}_SUCCESS`,
        message: 'Cart Item Added successfully',
        id,
      })
    } catch (error) {
      addStatus({
        type: `${type}_FAIL`,
        message: `Unable to add product named ${product.title}`,
        id,
      })
    }
  }, [])

  const updateCart = useCallback(async cartItem => {
    const type = 'UPDATE_CART'
    const { productId } = cartItem
    try {
      addStatus({
        type: `${type}_REQUEST`,
        message: 'Cart Item is Updating...',
        id: productId,
      })
      const res = await axiosInstance.put(`660/cart/${cartItem.id}`, cartItem)
      setCart(val => {
        const i = val.findIndex(x => x.id === cartItem.id)
        return [...val.slice(0, i), res, ...val.slice(i + 1)]
      })
      addStatus({
        type: `${type}_SUCCESS`,
        message: 'Cart Item Updated successfully',
        id: productId,
      })
    } catch (error) {
      addStatus({
        type: `${type}_FAIL`,
        message: 'Unable to update cart items witj',
        id: productId,
      })
    }
  }, [])

  const deleteCart = useCallback(async cartItem => {
    const type = 'DELETE_CART'
    const { productId } = cartItem
    try {
      addStatus({
        type: `${type}_REQUEST`,
        message: 'Cart Item is Deleting...',
        id: productId,
      })
      await axiosInstance.delete(`660/cart/${cartItem.id}`)
      setCart(val => {
        const i = val.findIndex(x => x.id === cartItem.id)
        return [...val.slice(0, i), ...val.slice(i + 1)]
      })
      addStatus({
        type: `${type}_SUCCESS`,
        message: 'Cart Item Deleted successfully',
        id: productId,
      })
    } catch (error) {
      addStatus({
        type: `${type}_FAIL`,
        message: 'Unable to delete cart items',
        id: productId,
      })
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [])

  const value = useMemo(
    () => ({ products, cart, loadData, addToCart, updateCart, deleteCart }),
    [products, cart]
  )

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingProvider
