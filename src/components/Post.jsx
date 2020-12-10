import React, { useEffect, useState } from 'react'

export default function Post() {
  
  const [posts, setPosts] = useState()
  const [test, setTest] = useState(true)
  const switchTest = () => {
    setTest(!test)
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  let postsToRender;
  if (posts) {
    postsToRender = posts.map(post => (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Posts</h1>
      {test ? <h3 onClick={switchTest}>Test</h3> : ''}
      { postsToRender }
    </div>
  )
}
