import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
       <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'white'}}>
       <Card className='m-2'>
        <Card.Img variant="top" src={restaurants.photograph} />
        <Card.Body>
          <Card.Title>{restaurants.name}</Card.Title>
          <Card.Text>
            <p>
              {restaurants.neighborhood}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
       </Link> 
    </div>
  )
}

export default RestaurantCard