import React from 'react'
import { connect } from 'react-redux'
import { displayCurrency } from '../../utils'
import Reviews from '../reviews'
import {
  addCartItemRequest,
  deleteCartItemRequest,
  updateCartItemRequest,
} from '../../actions/cartActions'

function Product({
  product,
  cartItem,
  addToCart,
  updateCart,
  deleteCart,
  isAdding,
  isUpdating,
  isDeleting,
}) {
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
                disabled={isUpdating}
                className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
                onClick={() =>
                  updateCart({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })
                }
              >
                +
              </button>
              <p className="flex-1 text-center font-bold text-4xl">
                {cartItem.quantity}
              </p>
              <button
                type="button"
                disabled={isUpdating || isDeleting}
                className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
                onClick={() => {
                  if (cartItem.quantity > 1) {
                    updateCart({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    })
                  } else {
                    deleteCart(cartItem)
                  }
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={isAdding}
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              onClick={() => addToCart(product)}
            >
              Add to bag
            </button>
          )}
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isAdding: loading.some(
    x => x.actionType === 'ADD_CART' && x.loadingId === product.id
  ),
  isUpdating: loading.some(
    x => x.actionType === 'UPDATE_CART' && x.loadingId === product.id
  ),
  isDeleting: loading.some(
    x => x.actionType === 'DELETE_CART' && x.loadingId === product.id
  ),
})

const mapDispatchToProps = dispatch => ({
  addToCart: product => addCartItemRequest(product)(dispatch),
  updateCart: cartItem => updateCartItemRequest(cartItem)(dispatch),
  deleteCart: cartItem => deleteCartItemRequest(cartItem)(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
