import React from 'react'
import Card from 'react-bootstrap/Card';

function Postcard({title,image,description}) {
  return <div className='postWrapper'>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>  
  </div>
}

export default Postcard