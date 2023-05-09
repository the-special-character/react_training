import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todoListItem'

function TodoList({ todoList, filterStatus, completeTodo, deleteTodo }) {
  return (
    <div className="w-full flex-1 overflow-y-auto">
      {todoList.map(x => {
        if (
          (x.isDone === true && filterStatus === 'completed') ||
          (x.isDone === false && filterStatus === 'pending') ||
          filterStatus === 'all'
        ) {
          return (
            <TodoListItem
              key={x.id}
              todoItem={x}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )
        }
        return null
      })}
    </div>
  )
}

TodoList.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  filterStatus: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ).isRequired,
}

export default memo(TodoList)
