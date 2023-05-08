import React, { Component, PureComponent } from 'react'
import shallowCompare from 'react-addons-shallow-compare'

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState)
  //   }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('component did mount')
    }, 1000)
    document.addEventListener('mousemove', this.mouseMove)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    document.removeEventListener('mousemove', this.mouseMove)
  }

  mouseMove = () => {
    console.log('Mouse Move')
  }

  render() {
    console.log('Child 2 component')
    const { counter } = this.props
    return <div>{`Child2 ${counter}`}</div>
  }
}
