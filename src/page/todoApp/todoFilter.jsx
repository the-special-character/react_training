import React, { memo } from 'react'
import PropTypes from 'prop-types'

function TodoFilter({ filterTodo, filterStatus }) {
  return (
    <div className="flex w-full">
      <button
        type="button"
        style={{
          backgroundColor: filterStatus === 'all' ? 'orange' : '#3E28DE',
        }}
        className="btn flex-1 rounded-none"
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        style={{
          backgroundColor: filterStatus === 'pending' ? 'orange' : '#3E28DE',
        }}
        className="btn flex-1 rounded-none"
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        style={{
          backgroundColor: filterStatus === 'completed' ? 'orange' : '#3E28DE',
        }}
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
  filterStatus: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
}

export default memo(TodoFilter)
