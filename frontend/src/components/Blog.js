import React from 'react'
function Blog({ blog }) {
  return (
    <li>
      {blog.title} - [{blog.author}]
    </li>
  )
}
export default Blog
