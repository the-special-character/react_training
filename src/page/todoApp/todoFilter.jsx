import React, { memo } from 'react'
import PropTypes from 'prop-types'

function TodoFilter({ filterTodo }) {
  console.log('TodoFilter App')
  return (
    <div className="flex w-full">
      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className="btn flex-1 rounded-none"
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  )
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
}

export default memo(TodoFilter)
