import React, { useCallback, useEffect, useRef, useState } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoFilter from './todoFilter'

function TodoApp() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [filterStatus, setFilterStatus] = useState('all')
  const inputRef = useRef(null)

  const loadTodo = useCallback(async filterType => {
    try {
      setIsLoading(true)
      let url = 'http://localhost:3000/todoList'
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`
      }
      const res = await fetch(url)
      const json = await res.json()
      setTodoList(json)
      setFilterStatus(filterType)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const addTodo = useCallback(async event => {
    try {
      event.preventDefault()
      setIsLoading(true)
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
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const completeTodo = useCallback(async item => {
    try {
      setIsLoading(true)
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
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteTodo = useCallback(async item => {
    try {
      setIsLoading(true)
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      })

      setTodoList(val => {
        const index = val.findIndex(x => x.id === item.id)
        return [...val.slice(0, index), ...val.slice(index + 1)]
      })
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTodo('all')
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 h-screen">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} ref={inputRef} />
      {error && <p>{error.message}</p>}
      {isLoading ? (
        <div className="flex-1">
          <p>Loading....</p>
        </div>
      ) : (
        <TodoList
          todoList={todoList}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      )}

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
