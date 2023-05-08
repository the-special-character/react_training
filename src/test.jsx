import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    counter: 0,
  }

  inc = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }

  dec = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }))
  }

  render() {
    const { counter } = this.state
    return (
      <div className="flex items-center p-4">
        <button
          className="w-full py-3 px-4 bg-blue-500 rounded-md text-white text-xl"
          onClick={this.inc}
          type="button"
        >
          +
        </button>
        <p className="px-6 text-4xl font-bold">{counter}</p>
        <button
          className="w-full py-3 px-4 bg-blue-500 rounded-md text-white text-xl"
          onClick={this.dec}
          type="button"
        >
          -
        </button>
      </div>
    )
  }
}
