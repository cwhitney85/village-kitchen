import React from 'react'
import MealsContainer from './MealsContainer'

export default function Home() {
  return (
    <div>
      <h1 className="welcome">Find a home cooked meal near you!</h1>
      <MealsContainer/>
    </div>
  )
}
