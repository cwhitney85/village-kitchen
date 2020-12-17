import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { newCook } from '../actions/index'
import { connect, useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function NewMeal() {
  const [name, setName] = useState()
  const [cuisine, setCuisine] = useState()
  const [price, setPrice] = useState()
  const [units, setUnits] = useState()
  const [recipe, setRecipe] = useState()
  const [image, setImage] = useState()
  return (
    <Form >
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="cuisine">
        <Form.Label>Cuisine:</Form.Label>
        <Form.Control type="text" name="cuisine" value={cuisine} onChange={e => setCuisine(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="units">
        <Form.Label>Supply:</Form.Label>
        <Form.Control type="number" name="units" value={units} onChange={e => setUnits(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="recipe">
        <Form.Label>Recipe:</Form.Label>
        <Form.Control type="textarea" name="recipe" value={recipe} onChange={e => setRecipe(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="text" name="image" value={image} onChange={e => setImage(e.target.value)}/>
      </Form.Group>
      <Button type="submit" style={{backgroundColor: "salmon"}}>Let's Eat!</Button>
    </Form>
  )
}

export default NewMeal
