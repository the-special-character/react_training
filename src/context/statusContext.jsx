import React, { createContext, useCallback, useMemo, useState } from 'react'

export const StatusContext = createContext()

function StatusProvider({ children }) {
  const [status, setStatus] = useState([])

  const addStatus = useCallback(({ type, message = 'Loading...', id = -1 }) => {
    const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type)
    if (match) {
      const [, actionType, actionState] = match
      if (actionState === 'REQUEST') {
        setStatus(val => {
          if (val.some(x => x.actionType === actionType && x.id === id)) {
            return val
          }
          return [
            ...val,
            {
              actionType,
              state: 'loading',
              message,
              id,
            },
          ]
        })
      }
      if (actionState === 'SUCCESS') {
        setStatus(val =>
          val.filter(x => !(x.id === id && x.actionType === actionType))
        )
      }
      if (actionState === 'FAIL') {
        setStatus(val =>
          val.map(x => {
            if (x.id === id && x.actionType === actionType) {
              return { ...x, state: 'error', message }
            }
            return x
          })
        )
      }
    }
  }, [])

  const removeError = useCallback(() => {}, [])

  const value = useMemo(() => ({ status, addStatus, removeError }), [status])

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  )
}

export default StatusProvider
