import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MealsContainer from './MealsContainer'

export default function Home() {
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
      <h1 className="welcome">Find a home cooked meal near you!</h1>
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
