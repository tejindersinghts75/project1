import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'

function Products() {
  // State initialization
  const [data, setData] = useState([])

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData()
  }, [])

  // Function to fetch data
  const fetchData = async () => {
    try {
      const url = await fetch('https://dummyjson.com/products')
      const response = await url.json()
      console.log(response)
      const output = response.products
      console.log(output)
      setData(output)
    } catch (error) {
      console.log('Error fetching data', error)
    }
  }
  const limit = 8

  // Render products
  return (
    <div>
      
      {data ? (
        <div className='container'>
         <h1 className='text-start my-5'>My Products</h1>
        <div className='row '>
          {data.slice(0,limit).map((item) => (
            <div className='col-md-3'>
            <Card key={item.id} style={{ width: '18rem' }}  >
              <Card.Img className='img-canvas' variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='d-flex text-center'><p>$</p>{item.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Products