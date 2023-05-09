import React, { PureComponent, createRef } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoFilter from './todoFilter'

class TodoApp extends PureComponent {
  state = {
    todoList: [],
    filterStatus: 'all',
  }

  inputRef = createRef()

  addTodo = event => {
    event.preventDefault()
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.inputRef.current?.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.inputRef.current.value = ''
      }
    )
  }

  completeTodo = item => {
    console.log(item)

    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === item.id)
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      }
    })
  }

  deleteTodo = item => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === item.id)
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      }
    })
  }

  filterTodo = filterStatus => {
    this.setState({ filterStatus })
  }

  render() {
    const { todoList, filterStatus } = this.state
    return (
      <div className="flex flex-col items-center gap-4 h-screen">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          todoList={todoList}
          filterStatus={filterStatus}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    )
  }
}

export default TodoApp
