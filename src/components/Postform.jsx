import React, { useState } from 'react'

export default function Postform() {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: title,
      body: body
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label><br/>
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Body: </label><br/>
          <textarea name="body" value={body} onChange={e => setBody(e.target.value)}/>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
