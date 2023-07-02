import React from "react";
import { Card, Form } from "react-bootstrap";

const List = (props) => {
  return (
    <Card style={{ width: "250px" }}>
      <Card.Body>
        <Card.Title>
          {props.textarea}

          {/* <input id='sil' value={note} onChange={e => setNote(e.target.value)} /> */}
        </Card.Title>
        <Form.Check type="checkbox" onDelete={props.id} />
      </Card.Body>
    </Card>
  );
};

export default List;
