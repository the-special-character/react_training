import React from 'react'
import PropTypes from 'prop-types'

// Function Component
function User({ firstName, lastName, age, gender }) {
  console.log('Render User componetn')
  return (
    <div>
      <p>{`First Name: ${firstName}`}</p>
      <p>{`Last Name: ${lastName}`}</p>
      <p>{`Age: ${age}`}</p>
      <p>{`Gender: ${gender}`}</p>
    </div>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.oneOf(['male', 'female']).isRequired,
}

export default User
