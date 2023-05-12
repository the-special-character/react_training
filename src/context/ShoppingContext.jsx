import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import axiosInstance from '../utils/axiosInstance'

export const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const loadData = useCallback(async () => {
    try {
      const res = await Promise.all([
        axiosInstance.get('660/products'),
        axiosInstance.get('660/cart'),
      ])
      setProducts(res[0])
      setCart(res[1])
    } catch (error) {
      console.log(error)
    }
  }, [])

  const addToCart = useCallback(async product => {
    try {
      const res = await axiosInstance.post('660/cart', {
        productId: product.id,
        quantity: 1,
      })
      setCart(val => [...val, res])
    } catch (error) {}
  }, [])

  const updateCart = useCallback(async cartItem => {
    try {
      const res = await axiosInstance.put(`660/cart/${cartItem.id}`, cartItem)
      setCart(val => {
        const i = val.findIndex(x => x.id === cartItem.id)
        return [...val.slice(0, i), res, ...val.slice(i + 1)]
      })
    } catch (error) {}
  }, [])

  const deleteCart = useCallback(async cartItem => {
    try {
      await axiosInstance.delete(`660/cart/${cartItem.id}`)
      setCart(val => {
        const i = val.findIndex(x => x.id === cartItem.id)
        return [...val.slice(0, i), ...val.slice(i + 1)]
      })
    } catch (error) {}
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
