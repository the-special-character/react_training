import { applyMiddleware, compose, createStore } from 'redux'
import rootReducers from './reducers'
import logger from './middlewares/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(logger))
)

export default store
