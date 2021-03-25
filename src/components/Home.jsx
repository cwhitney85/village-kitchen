import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MealsContainer from './MealsContainer'

export default function Home() {
  

  return (
    <div>
      <h1 className="welcome">Find a tasty home cooked meal near you today!</h1>
      <MealsContainer/>
    </div>
  )
}
