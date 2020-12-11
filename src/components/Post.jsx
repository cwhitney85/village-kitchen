import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../actions/index'

// const mapStateToProps = state => ({
//   posts: state.post.items
// })


function Post() {
  
  // const [posts, setPosts] = useState()
  // const [test, setTest] = useState(true)
  // const switchTest = () => {
  //   setTest(!test)
  // }
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchPosts())
    console.log('test')
  }, [])

  let postsToRender;
  if (this.props.posts) {
    postsToRender = this.props.posts.map(post => (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Posts</h1>
      { postsToRender }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.post.items
  }
  
}

export default connect(mapStateToProps, { fetchPosts })(Post)