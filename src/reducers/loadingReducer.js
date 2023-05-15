const initialState = []

export default (state = initialState, { type, meta }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type)
  if (!match) return state

  const [, actionType, actionState] = match
  if (actionState === 'REQUEST') {
    return [
      ...state,
      {
        actionType,
        state: 'loading',
        ...meta,
      },
    ]
  }
  return state.filter(
    x => !(x.actionType === actionType && x.loadingId === meta.loadingId)
  )
}
