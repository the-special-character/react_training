const logger = store => next => action => {
  const match = /(.*)_(FAIL)/.exec(action.type)
  if (match) {
    // server call
  }

  next(action)
}

export default logger
