import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardGroup, Card, CardDeck, CardImg } from 'react-bootstrap'

function MealsContainer() {
  const [meals, setMeals] = useState()
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/meals/')
    .then(response => {
      const meals = response.data
      console.log(meals)
    }).catch(error => {
      console.log(error.message)
    })
  }, [])
  return (
    <div>
      <h1>Come and get it!</h1>
    </div>
  )
}

export default MealsContainer
