import request from './request'

const updateAccount = async (dataRequest, token) => {
  try {
    const { data } = await request({
      method: 'POST',
      path: '/api/account/update/',
      token,
      data: dataRequest
    })
    return data
  } catch (e) {
    return {}
  }
}

export default updateAccount
