import * as R from 'ramda'
import { SET_VALUE } from '../actions/data'

const setValue = (fieldId, value) => R.assocPath(fieldId, value)

const reducerData = (state = 0, { payload, type }) => {
  switch (type) {
    case SET_VALUE:
      return setValue(payload.fieldId.split('.'), payload.value)(state)
    default:
      return state
  }
}

export default reducerData
