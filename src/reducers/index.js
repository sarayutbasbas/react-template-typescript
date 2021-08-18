import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import data from './data'

const rootReducers = { data }

const reducers = (history) => combineReducers({
  router: connectRouter(history),
  ...rootReducers,
})

export default reducers
