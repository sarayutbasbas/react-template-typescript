import { takeLatest, all, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { TEST_SAGA } from '../actions/data'

// TODO: This file makes for test only
export function* watchTestSaga() {
  yield put(push('/test'))
}

const testSaga = function* () {
  yield all([takeLatest(TEST_SAGA, watchTestSaga)])
}

export default testSaga
