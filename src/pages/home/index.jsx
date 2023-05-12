import React, { useCallback, useContext, useEffect, useState } from 'react'

import axiosInstance from '../../utils/axiosInstance'
import { AuthContext } from '../../context/authContext'
import { displayCurrency } from '../../utils'
import Reviews from '../../components/reviews'

function Home() {
  const { user } = useContext(AuthContext)
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
  }, [user])

  useEffect(() => {
    loadData()
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

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {products.map(product => {
        const cartItem = cart.find(x => x.productId === product.id)
        return (
          <div
            key={product.id}
            className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 my-10"
          >
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-3">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-9">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {product.title}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading">{product.description}</h3>

                <p className="text-2xl text-gray-900">
                  {displayCurrency({ price: product.price })}
                </p>

                {/* Reviews */}
                <Reviews {...product.rating} />
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading">{product.category}</h3>

                {cartItem ? (
                  <div className="flex items-center mt-6">
                    <button
                      type="button"
                      className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      +
                    </button>
                    <p className="flex-1 text-center font-bold text-4xl">
                      {cartItem.quantity}
                    </p>
                    <button
                      type="button"
                      className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to bag
                  </button>
                )}
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
