import { spawn } from 'redux-saga/effects'
import watchTestSaga from './watchTestSaga'

const data = [
  spawn(watchTestSaga),
]

export default data
