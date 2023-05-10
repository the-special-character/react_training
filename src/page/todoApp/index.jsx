import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoFilter from './todoFilter'
import useStatus from '../../hooks/useStatus'

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [filterStatus, setFilterStatus] = useState('all')
  const inputRef = useRef(null)
  const { status, setAppStatus } = useStatus()

  const loadTodo = useCallback(async filterType => {
    const action = 'LOAD_TODO'
    const id = -1
    try {
      setAppStatus({
        type: `${action}_REQUEST`,
        id,
        message: 'Loading',
      })
      let url = 'http://localhost:3000/todoList'
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`
      }
      const res = await fetch(url)
      const json = await res.json()
      // {type: "LOAD_TODO_SUCCESS"}
      setTodoList(json)
      setFilterStatus(filterType)
      setAppStatus({
        type: `${action}_SUCCESS`,
        id,
      })
    } catch (err) {
      setAppStatus({
        type: `${action}_FAIL`,
        id,
        message: 'Loading Failed',
      })
    }
  }, [])

  const addTodo = useCallback(async event => {
    const action = 'ADD_TODO'
    const id = -1
    try {
      setAppStatus({
        type: `${action}_REQUEST`,
        id,
        message: 'Loading',
      })
      event.preventDefault()
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: inputRef.current?.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const json = await res.json()

      setTodoList(val => [...val, json])
      setAppStatus({
        type: `${action}_SUCCESS`,
        id,
      })
    } catch (err) {
      setAppStatus({
        type: `${action}_FAIL`,
        id,
        message: 'Loading Failed',
      })
    }
  }, [])

  const completeTodo = useCallback(async item => {
    const action = 'UPDATE_TODO'
    const { id } = item
    try {
      setAppStatus({
        type: `${action}_REQUEST`,
        id,
        message: 'Loading',
      })
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const json = await res.json()

      setTodoList(val => {
        const index = val.findIndex(x => x.id === item.id)
        return [...val.slice(0, index), json, ...val.slice(index + 1)]
      })
      setAppStatus({
        type: `${action}_SUCCESS`,
        id,
      })
    } catch (err) {
      setAppStatus({
        type: `${action}_FAIL`,
        id,
        message: 'Loading Failed',
      })
    }
  }, [])

  const deleteTodo = useCallback(async item => {
    const action = 'DELETE_TODO'
    const { id } = item
    try {
      setAppStatus({
        type: `${action}_REQUEST`,
        id,
        message: 'Loading',
      })
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      })

      setTodoList(val => {
        const index = val.findIndex(x => x.id === item.id)
        return [...val.slice(0, index), ...val.slice(index + 1)]
      })
      setAppStatus({
        type: `${action}_SUCCESS`,
        id,
      })
    } catch (err) {
      setAppStatus({
        type: `${action}_FAIL`,
        id,
        message: 'Loading Failed',
      })
    }
  }, [])

  useEffect(() => {
    loadTodo('all')
  }, [])

  const loadTodoStatus = status.find(x => x.actionType === 'LOAD_TODO')
  const addTodoStatus = status.find(x => x.actionType === 'ADD_TODO')
  const updateTodoStatus = status.filter(x => x.actionType === 'UPDATE_TODO')
  const deleteTodoStatus = status.filter(x => x.actionType === 'DELETE_TODO')

  return (
    <div className="flex flex-col items-center gap-4 h-screen">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} ref={inputRef} status={addTodoStatus} />
      {loadTodoStatus?.state === 'error' && <p>{loadTodoStatus.message}</p>}
      {loadTodoStatus?.state === 'loading' ? (
        <div className="flex-1">
          <p>Loading....</p>
        </div>
      ) : (
        <TodoList
          todoList={todoList}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          updateStatus={updateTodoStatus}
          deleteStatus={deleteTodoStatus}
        />
      )}

      {/* <TodoList
        todoList={todoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      /> */}

      <TodoFilter filterStatus={filterStatus} filterTodo={loadTodo} />
    </div>
  )
}

// class TodoApp extends PureComponent {
//   state = {
//     todoList: [],
//     filterStatus: 'all',
//     isLoading: false,
//     error: null,
//   }

//   inputRef = createRef()

//   async componentDidMount() {
//     this.loadTodo('all')
//   }

//   loadTodo = async filterStatus => {
//     this.setState({ isLoading: true })
//     try {
//       let url = 'http://localhost:3000/todoList'
//       if (filterStatus !== 'all') {
//         url = `${url}?isDone=${filterStatus === 'completed'}`
//       }
//       const res = await fetch(url)
//       const json = await res.json()
//       this.setState({ todoList: json, filterStatus })
//     } catch (error) {
//       this.setState({ error })
//     } finally {
//       this.setState({ isLoading: false })
//     }
//   }

//   addTodo = async event => {
//     this.setState({ isLoading: true })
//     try {
//       event.preventDefault()
//       const res = await fetch('http://localhost:3000/todoList', {
//         method: 'POST',
//         body: JSON.stringify({
//           text: this.inputRef.current?.value,
//           isDone: false,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       })

//       const json = await res.json()

//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, json],
//         }),
//         () => {
//           this.inputRef.current.value = ''
//         }
//       )
//     } catch (error) {
//       this.setState({ error })
//     } finally {
//       this.setState({ isLoading: false })
//     }
//   }

//   completeTodo = async item => {
//     this.setState({ isLoading: true })
//     try {
//       const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ ...item, isDone: !item.isDone }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       })

//       const json = await res.json()

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id)
//         return {
//           todoList: [
//             ...todoList.slice(0, index),
//             json,
//             ...todoList.slice(index + 1),
//           ],
//         }
//       })
//     } catch (error) {
//       this.setState({ error })
//     } finally {
//       this.setState({ isLoading: false })
//     }
//   }

//   deleteTodo = async item => {
//     this.setState({ isLoading: true })
//     try {
//       await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'DELETE',
//       })
//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id)
//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         }
//       })
//     } catch (error) {
//       this.setState({ error })
//     } finally {
//       this.setState({ isLoading: false })
//     }
//   }

//   render() {
//     const { todoList, filterStatus, isLoading, error } = this.state

//     return (
//       <div className="flex flex-col items-center gap-4 h-screen">
//         <h1>Todo App</h1>
//         <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
//         {error && <p>{error.message}</p>}
//         {isLoading ? (
//           <div className="flex-1">
//             <p>Loading....</p>
//           </div>
//         ) : (
//           <TodoList
//             todoList={todoList}
//             completeTodo={this.completeTodo}
//             deleteTodo={this.deleteTodo}
//           />
//         )}

//         <TodoFilter filterStatus={filterStatus} filterTodo={this.loadTodo} />
//       </div>
//     )
//   }
// }

export default TodoApp
