import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import usersService from './services/users'

const App = () => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const [message, setMessage] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setPassword('')
      setUsername('')
      setMessage(['successfully login', 'success'])
      setTimeout(() => {
        setMessage('')
      }, 5000)
    } catch (error) {
      setMessage(['Wrong username and/or password', 'danger'])
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  const handleAddBlog = (e) => {
    // e.preventDefault()
    const blog = {
      title,
      url,
      author,
    }

    blogService.createBlog(blog).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog))
      setTitle('')
      setUrl('')
      setAuthor('')
      setBlogs('')
      setMessage(`Successfully Added ${blog.title}`, 'success')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    })
  }

  useEffect(() => {
    const fechData = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }
    fechData()
  }, [])

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedUser')
    if (logged) {
      const user = JSON.parse(logged)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div className='container-fluid w-100 h-100 m-0 p-0 bg-white'>
      <div className=' centre w-95 m-5 mx-auto my-auto container'>
        <Notification {...{ message }} />
        {user === null ? (
          <LoginForm
            {...{ username, password, setUsername, setPassword, handleLogin }}
          />
        ) : (
          <div>
            <hr />
            <p>
              {user && user.name} logged-in{' '}
              <button
                className='btn-danger'
                onClick={() => {
                  setUser(null)
                  window.localStorage.removeItem('loggedUser')
                  window.localStorage.clear()
                  setMessage(['Successfully logout', 'success'])
                  setTimeout(() => {
                    setMessage('')
                  }, 5000)
                }}
              >
                logout
              </button>
            </p>
            <hr />
            <BlogForm
              {...{
                title,
                author,
                url,
                handleAddBlog,
                setAuthor,
                setTitle,
                setUrl,
              }}
            />
            <ol>
              <hr />
              <h2>Blogs</h2>
              {blogs &&
                blogs
                  // .filter(({ author }) => user.name === author)
                  .map((blog) => <Blog key={blog.id} {...{ blog }} />)}
            </ol>
            <hr />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
