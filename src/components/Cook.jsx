import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {LinkContainer} from 'react-router-bootstrap'
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, NavItem } from 'react-bootstrap'

function Cook() {
  const { cookId } = useParams()
  const [cook, setCook] = useState()
  const [meals, setMeals] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCook = async () => {
      const cookResult = await axios.get(process.env.REACT_APP_API_URL + `/api/v1/cooks/${cookId}`)
      const mealResult = await axios.get(process.env.REACT_APP_API_URL + `/api/v1/meals/madeby/${cookId}`)
      console.log(cookResult.data.data)
      console.log(mealResult.data)
      setCook(cookResult.data)
      setMeals(mealResult.data)
      setIsLoading(false)
    }
    getCook()
  }, [])
  return (
    <div>
      {isLoading ? <h1>Loading...</h1> :
      <>
      <Jumbotron fluid style={{backgroundImage: `url(${cook.data.banner})`, backgroundSize: "cover"}} className="cookJumbo">
        <Container>
        </Container>
      </Jumbotron>
      <div className="profileInfo">
        <Image src={cook.data.avatar} roundedCircle className="profilePic"/>
        <h1>{cook.data.username}</h1>
        <h4>Specialties: {cook.data.specialty}</h4>
      </div>
      <Container>
        <CardDeck>
          {meals.data.map(item => (
            <LinkContainer to={`/meals/${item.id}`}>
              <Card key={item.id}>
                <Card.Img variant="top" src={item.image} style={{height: "50%"}}/>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.recipe}</Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          ))}
        </CardDeck>
      </Container>
      </>
      }
    </div>
  )
}

export default Cook
