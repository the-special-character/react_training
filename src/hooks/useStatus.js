import { useState } from 'react'

const useStatus = () => {
  const [status, setStatus] = useState([])

  const setAppStatus = ({ type, message, id }) => {
    const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type)
    if (match) {
      const [, actionType, actionState] = match
      if (actionState === 'REQUEST') {
        setStatus(val => [
          ...val,
          {
            actionType,
            state: 'loading',
            message,
            id,
          },
        ])
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
  }

  return {
    status,
    setAppStatus,
  }
}

export default useStatus
