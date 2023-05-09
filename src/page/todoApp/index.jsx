import React, { PureComponent } from 'react'

class TodoApp extends PureComponent {
  state = {
    todoText: '',
    todoList: [],
  }

  changeText = event => {
    this.setState({ todoText: event.target.value })
  }

  addTodo = event => {
    event.preventDefault()
    this.setState(({ todoText, todoList }) => ({
      todoList: [...todoList, { id: new Date().valueOf(), text: todoText }],
      todoText: '',
    }))
  }

  render() {
    const { todoText, todoList } = this.state

    return (
      <div className="flex flex-col items-center gap-4">
        <h1>Todo App</h1>
        <form className="flex" onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              type="text"
              id="todoText"
              value={todoText}
              onChange={this.changeText}
              className="rounded-l-md"
            />
          </div>
          <button className="btn rounded-l-none" type="submit">
            Add Todo
          </button>
        </form>
        <div className="w-full">
          {todoList.map(x => (
            <div key={x.id} className="flex items-center m-4">
              <input type="checkbox" name="" id="" />
              <p className="flex-1 px-4">{x.text}</p>
              <button type="button" className="btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default TodoApp
