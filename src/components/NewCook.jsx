import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { newCook } from '../actions/index'
import { connect, useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewCook() {
  const [userName, setUserName] = useState()
  const [specialty, setSpecialty] = useState()
  const [avatar, setAvatar] = useState()
  const [banner, setBanner] = useState()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const test = async () => {
      const result = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/cooks/test', {withCredentials: true})
      return result
    }
    test()
  }, [])

  const newCookSubmit = (e) => {
    e.preventDefault()
    dispatch(newCook(userName, specialty, avatar, banner))
    setUserName()
    setSpecialty()
    setAvatar()
    setBanner()
    history.push('/')
  }

  return (
    <Form onSubmit={newCookSubmit}>
      <Form.Group controlId="userName">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="userName" value={userName} onChange={e => setUserName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="specialty">
        <Form.Label>Specialties:</Form.Label>
        <Form.Control type="text" name="specialty" value={specialty} onChange={e => setSpecialty(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="avatar">
        <Form.Label>Profile Picture:</Form.Label>
        <Form.Control type="text" name="avatar" value={avatar} onChange={e => setAvatar(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="banner">
        <Form.Label>Banner Image:</Form.Label>
        <Form.Control type="text" name="banner" value={banner} onChange={e => setBanner(e.target.value)}/>
      </Form.Group>
      <Button type="submit" style={{backgroundColor: "salmon"}}>Get Cookin'!</Button>
    </Form>
  )
}


export default NewCook
