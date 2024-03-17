import React from 'react'
import { useRouter } from 'next/router'

const BlogDetails = () => {
  const {query} = useRouter()

  return (
    <div>
        <h1>BlogDetails if is - {query.blogId}</h1>
    </div>
  )
}

export default BlogDetails