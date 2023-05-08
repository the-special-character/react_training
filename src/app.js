import React from 'react'
import PropTypes from 'prop-types'

// 1. first letter should be always capital
// 2. return single element from the component
// 3. apply inline style as object and propties should be in camelCase
// 4. instead of class use className
function App({ title, desc, number }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <h3>{number}</h3>
      <input type="checkbox" className="border border-gray-300 rounded-lg" />
      <div />
      <div />
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  number: PropTypes.number.isRequired,
}

App.defaultProps = {
  desc: 'Batsman',
}

export default App
