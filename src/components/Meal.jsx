import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Meal() {
  const { id } = useParams()
  const [meal, setMeal] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMeal = async () => {
      const result = await axios.get(`http://localhost:8000/api/v1/meals/${id}`)

      console.log(result.data)
      setMeal(result.data)
      setIsLoading(false)
    }
    getMeal()
  }, [])
  
  return (
    <div>
      {isLoading ? <h1>Loading...</h1> :
      <>
      <h1>{meal.data.name}</h1>
      <img src={meal.data.image} style={{width: "50%", margin: "0 auto"}}/>
      <h3>{meal.data.cuisine}</h3>
      <ul>
        <li>Price: ${meal.data.price}</li>
        <li>Units: {meal.data.units}</li>
      </ul>
      <p>{meal.data.recipe}</p>
      </>
      }
    </div>
  )
}

export default Meal
