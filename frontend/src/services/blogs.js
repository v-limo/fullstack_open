import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createBlog = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.post(baseUrl, newBlog, config)
  return res.data
}

const UpdateBlog = async (id, newBlog) => {
  const res = await axios.put(`${baseUrl}/${id}`, newBlog)
  return res.data
}

export default { getAll, createBlog, UpdateBlog, setToken }
