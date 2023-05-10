import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todoListItem'

function TodoList({
  todoList,
  completeTodo,
  deleteTodo,
  updateStatus,
  deleteStatus,
}) {
  console.log('Todo List Component')
  return (
    <div className="w-full flex-1 overflow-y-auto">
      {todoList.map(x => (
        <TodoListItem
          key={x.id}
          todoItem={x}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus.find(y => y.id === x.id)}
          deleteStatus={deleteStatus.find(y => y.id === x.id)}
        />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ).isRequired,
}

export default memo(TodoList)
