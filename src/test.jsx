import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child1 from './child1'
import Child2 from './child2'

// 1. Mounting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// 2. updating
// -> getDerivedStateFromProps
// -> shouldComponentUpdate / PureComponent

let a = 10

export default class Test extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }

  state = {
    counter: 0,
    photo: null,
    name: 'Yagnesh',
  }

  //   Derive state value base on props
  //   bnd method
  //   call only once
  //   constructor(props) {
  //     super(props)
  //     // this.state = {
  //     //   counter: props.count,
  //     // }
  //     // this.inc = this.inc.bind(this)
  //     // this.dec = this.dec.bind(this)
  //   }

  static getDerivedStateFromProps(props, state) {
    console.log(document.getElementById('heading'))
    return {
      counter: state.counter === 0 ? props.count : state.counter,
      //   name: `Hey, ${props.name}`,
    }
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     // first
  //   }

  //   call only once
  //   to fetch data from database
  // register events
  async componentDidMount() {
    document.addEventListener('copy', () => {
      console.log('Coppied')
    })
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos/1')

      const json = await res.json()
      this.setState({ photo: json })
    } catch (error) {}
    // console.log(document.getElementById('heading'))
    // document.getElementById('heading').style.color = 'red'
  }

  inc = () => {
    this.setState(({ counter }) => ({
      counter: counter >= 10 ? counter : counter + 1,
    }))
  }

  dec = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }))
  }

  //   render html in DOM
  render() {
    const { counter, photo, name } = this.state
    return (
      <div>
        <h1 id="heading">{name}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ name: 'Virat' })
          }}
        >
          Change name
        </button>
        {photo && (
          <img src={photo.url} alt={photo.title} height={100} width={100} />
        )}
        <div className="flex items-center p-4">
          <button
            className="w-full py-3 px-4 bg-blue-500 rounded-md text-white text-xl"
            onClick={this.inc}
            type="button"
          >
            +
          </button>
          {`Hello a ${a}`}
          <p className="px-6 text-4xl font-bold">{counter}</p>
          <button
            className="w-full py-3 px-4 bg-blue-500 rounded-md text-white text-xl"
            onClick={this.dec}
            type="button"
          >
            -
          </button>
        </div>
        <Child1 />
        <Child2 counter={counter} />
      </div>
    )
  }
}

// Test.propTypes = {
//   count: PropTypes.number.isRequired,
// }
