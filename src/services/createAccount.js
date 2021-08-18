import request from './request'

const createAccount = async (token, dataRequest) => {
  try {
    const { data } = await request({
      method: 'POST',
      path: '/api/account/',
      token,
      data: dataRequest
    })
    return data
  } catch (e) {
    return {}
  }
}

export default createAccount
