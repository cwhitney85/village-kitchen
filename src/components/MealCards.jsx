import React from 'react'
import { useParams } from 'react-router-dom'

function MealCards() {
  const { id } = useParams()
  return (
    <div>
      <h3>Meal Cards {id}</h3>
    </div>
  )
}

export default MealCards
