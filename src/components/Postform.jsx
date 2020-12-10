import React, { useState } from 'react'

export default function Postform() {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  

  return (
    <div>
      <h1>Add Post</h1>
      <form>
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
