import React from 'react'
import { displayCurrency } from '../../utils'

function CartItem({ product, cartItem, isDeleting, deleteCart }) {
  return (
    <li key={product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.title}</a>
            </h3>
            <p className="ml-4">
              {displayCurrency({
                price: product.price,
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {cartItem.quantity}</p>

          <div className="flex">
            <button
              type="button"
              disabled={isDeleting}
              className="font-medium text-indigo-600 hover:text-indigo-500 disabled:text-slate-500 disabled:cursor-wait"
              onClick={() => deleteCart(cartItem)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
