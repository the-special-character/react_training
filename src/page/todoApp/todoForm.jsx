import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'

const TodoForm = forwardRef(({ addTodo, status }, ref) => {
  console.log('Todo form')
  return (
    <>
      {status?.state === 'error' && <p>{status.message}</p>}
      <form className="flex" onSubmit={addTodo}>
        <div>
          <label htmlFor="todoText" className="sr-only">
            Todo Text
          </label>
          <input type="text" id="todoText" ref={ref} className="rounded-l-md" />
        </div>
        <button
          disabled={status?.state === 'loading'}
          className="btn rounded-l-none disabled:bg-slate-400 disabled:cursor-wait"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  )
})

TodoForm.displayName = 'TodoForm'

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default memo(TodoForm)
