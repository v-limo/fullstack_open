import React from 'react'

function BlogForm({
  title,
  author,
  url,
  handleAddBlog,
  setAuthor,
  setTitle,
  setUrl,
}) {
  return (
    <>
      <h2>Blog form</h2>
      <form onSubmit={handleAddBlog}>
        <div>
          <label>author : </label>
          <input
            type='text'
            value={author}
            name='Author'
            onChange={({ target }) => setAuthor(target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label>title : </label>
          <input
            type='text'
            value={title}
            name='Title'
            onChange={({ target }) => setTitle(target.value)}
          ></input>
        </div>{' '}
        <br />
        <div>
          <label>url : </label>
          <input
            type='text'
            value={url}
            name='Url'
            onChange={({ target }) => setUrl(target.value)}
          ></input>
        </div>{' '}
        <br />
        <button type='submit'>save blog</button>
      </form>
    </>
  )
}

export default BlogForm
