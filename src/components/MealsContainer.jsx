import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardGroup, Card, CardDeck, CardImg } from 'react-bootstrap'
import MealCards from './MealCards'

function MealsContainer() {
  const [meals, setMeals] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMeals = async () => {
      const result = await axios.get('http://localhost:8000/api/v1/meals/')

      setMeals(result.data.data)
      setIsLoading(false)
    }

    getMeals()
  }, [])

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> :
      <ul>
        {meals.map(item => (
          <li key={item.id}>{item.cuisine}</li>
        ))}
      </ul>
      }
    </div>
  )
}

export default MealsContainer
