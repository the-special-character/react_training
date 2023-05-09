import React, { memo } from 'react'
import PropTypes from 'prop-types'

function TodoListItem({ todoItem, completeTodo, deleteTodo }) {
  console.log('todoList Item')
  return (
    <div className="flex items-center m-4">
      <input
        type="checkbox"
        checked={todoItem.isDone}
        onChange={() => completeTodo(todoItem)}
      />
      <p
        className="flex-1 px-4"
        style={{
          textDecoration: todoItem.isDone ? 'line-through' : 'none',
        }}
      >
        {todoItem.text}
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(todoItem)}
      >
        Delete
      </button>
    </div>
  )
}

TodoListItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default memo(TodoListItem)
