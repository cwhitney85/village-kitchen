import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardGroup, Card, CardDeck, CardImg } from 'react-bootstrap'
import MealCards from './MealCards'

function MealsContainer() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const getMeals = async () => {
      const mealsData = await axios('http://localhost:8000/api/v1/meals/');

      setMeals(mealsData.data.data);
    }
    getMeals()
    console.log(meals)
  }, []);
  
  return (
    <ul>
      {meals.map(meal => {
        <li key={meal.id}>
          {meal.cuisine}
        </li>
      })}
    </ul>
  )
}

export default MealsContainer
