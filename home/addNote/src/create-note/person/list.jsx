import React from 'react'
import { Card } from 'react-bootstrap';

const List = (props) => {
  return (
    <Card style={{ width: "250px" }}>    
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default List