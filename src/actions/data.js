export const SET_VALUE = 'SET_VALUE'
export const TEST_SAGA = 'TEST_SAGA' // TODO: For test only

export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value,
})

// TODO: For test only
export const testSaga = () => ({
  type: TEST_SAGA,
})
