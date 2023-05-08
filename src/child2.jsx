import React, { Component, PureComponent } from 'react'
import shallowCompare from 'react-addons-shallow-compare'

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState)
  //   }

  render() {
    console.log('Child 2 component')
    const { counter } = this.props
    return <div>{`Child2 ${counter}`}</div>
  }
}
