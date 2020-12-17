import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Cook() {
  const { cookId } = useParams()
  const [cook, setCook] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCook = async () => {
      const result = await axios.get(`http://localhost:8000/api/v1/cooks/${cookId}`)

      console.log(result.data.data)
      setCook(result.data)
      setIsLoading(false)
    }
    getCook()
  }, [])
  return (
    <div>
      {isLoading ? <h1>Loading...</h1> :
      <h1>{cook.data.specialty}</h1>
      }
    </div>
  )
}

export default Cook
