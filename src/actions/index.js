export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const fetchPosts = () => dispatch => {
  console.log('fetching')
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => 
    dispatch({
      type: 'FETCH_POSTS',
      payload: posts
    })
  )
}