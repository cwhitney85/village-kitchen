import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import FigureCaption from 'react-bootstrap/esm/FigureCaption'

function Meal() {
  const { id } = useParams()
  const [meal, setMeal] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMeal = async () => {
      const result = await axios.get(process.env.REACT_APP_API_URL + `/api/v1/meals/${id}`)

      console.log(result.data)
      setMeal(result.data)
      setIsLoading(false)
    }
    getMeal()
  }, [])
  
  return (
    <div>
      {isLoading ? <h1>Loading...</h1> :
      <Jumbotron fluid className="mealJumbo">
        <Container >
          <div className="meal">
            <Figure >
              <FigureImage src={meal.data.image} className="jumboImage"/>
            </Figure>
            <h1>{meal.data.name}</h1>
            <h5><em>{meal.data.recipe}</em></h5>
          </div>
          <ul>
            <li>Cuisine: {meal.data.cuisine}</li>
            <li>Price: ${meal.data.price}</li>
            <li>Units: {meal.data.units}</li>
            <li>Created by: <Link to={`/cook/${meal.data.cook.user.id}`}>{meal.data.cook.username}</Link></li>
          </ul>
          <Button style={{backgroundColor: "salmon"}}>Buy this meal!</Button>
        </Container>
      </Jumbotron>
      // <Jumbotron>
      // <h1>{meal.data.name}</h1>
      // <img src={meal.data.image} style={{width: "50%", margin: "0 auto"}}/>
      // <h3>{meal.data.cuisine}</h3>
      // <ul>
      //   <li>Price: ${meal.data.price}</li>
      //   <li>Units: {meal.data.units}</li>
      // </ul>
      // <p>{meal.data.recipe}</p>
      // </Jumbotron>
      }
    </div>
  )
}

export default Meal
