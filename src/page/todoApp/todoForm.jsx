import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('Todo form')
  return (
    <form className="flex" onSubmit={addTodo}>
      <div>
        <label htmlFor="todoText" className="sr-only">
          Todo Text
        </label>
        <input type="text" id="todoText" ref={ref} className="rounded-l-md" />
      </div>
      <button className="btn rounded-l-none" type="submit">
        Add Todo
      </button>
    </form>
  )
})

TodoForm.displayName = 'TodoForm'

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default memo(TodoForm)
