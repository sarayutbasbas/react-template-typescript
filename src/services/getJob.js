import request from './request'

const getJob = async (limit = 10) => {
  try {
    const { data } = await request({
      method: 'GET',
      path: `/api/job/?limit=${limit}`,
    })
    return data.result
  } catch {
    return {}
  }
}

export default getJob
