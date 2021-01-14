import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { CardGroup, Card, CardDeck, CardImg, CardColumns } from 'react-bootstrap'
import MealCards from './MealCards'

function MealsContainer() {
  const [meals, setMeals] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMeals = async () => {
      const result = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/meals/')

      setMeals(result.data)
      setIsLoading(false)
    }

    getMeals()
  }, [])

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : 
      <CardColumns>
        {meals.data.map(item => (
          <LinkContainer to={`meals/${item.id}`} item={item}>
            <Card key={item.id}>
              <Card.Img variant="top" src={item.image}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.recipe}</Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        ))}
      </CardColumns>
      }
    </div>
  )
}

export default MealsContainer
