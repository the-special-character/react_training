import React from 'react'
import TodoApp from './page/todoApp'

function App() {
  return <TodoApp />
}

export default App
// import TodoApp from './page/todoApp'

// all the hook name start with "use" keyword

// Mounting

// Conscructor -> using props
// getDerivedStateFromPrps -> useEffect
// render -> return
// componendDidMount -> useEffect + []

// Updating
// getDerivedStateFromPrps -> useEffect + [props]
// shouldComponentUpdate -> memo
// render  -> return
// snapshotBeforeUpdate -> not possibe
// componentDidMount -> useEffect + [props + state]

// Unmounting
// componentWillUnmount -> useEffect

// Error -> not possibe
// getDerivedStateFromError
// componentDidCatch

// function Test({ count }) {
//   const [counter, setCounter] = useState(0)
//   const isMounted = useRef(false)
//   // x
//   // y
//   // z

//   const inc = () => {
//     setCounter(val => val + 1)
//   }

//   const decr = () => {
//     setCounter(val => val - 1)
//   }

//   // componentDidMount + componentDidUpdate
//   // you can add multiple useEffect
//   // never create useeffect without second parameter(golder rule)
//   // useEffect(() => {
//   //   console.log('Component Did Mount + component Did Update')
//   //   console.log(document.getElementsByClassName('btn').length)
//   // })

//   // componentDidMount

//   // getDerivedStateFromProps
//   useEffect(() => {
//     if (isMounted.current) {
//       console.log('Component Did Mount + component did update on count change')
//       // setCounter(count)
//       // changing y
//     }
//   }, [count])

//   useEffect(() => {
//     if (isMounted.current) {
//       console.log(
//         'Component Did Mount + component did update on count or counter change'
//       )
//     }
//     //
//     // setCounter(counter + 1)
//   }, [counter])

//   useEffect(() => {
//     console.log('only Component Did Mount')
//     isMounted.current = true

//     const mouseMove = () => {
//       console.log('Mouse move')
//     }

//     document.addEventListener('mousemove', mouseMove)
//     // changing x

//     // component will Unmount
//     return () => {
//       document.removeEventListener('mousemove', mouseMove)
//     }
//   }, [])

//   return (
//     <div className="flex items-center">
//       <button type="button" className="btn" onClick={inc}>
//         +
//       </button>
//       <p className="text-4xl font-bold px-4">{counter}</p>
//       <button type="button" className="btn" onClick={decr}>
//         -
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(5)

//   const changeCount = () => setCount(val => val + 1)

//   return (
//     <div>
//       {count < 10 && <Test count={count} />}
//       <p>{count}</p>
//       <button type="button" onClick={changeCount}>
//         Change Counter
//       </button>
//     </div>
//   )
// }
