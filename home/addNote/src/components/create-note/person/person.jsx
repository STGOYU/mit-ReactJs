import React from 'react'
import { Card } from 'react-bootstrap';
import { Delete, Input } from "@mui/icons-material";
const Person = (props) => {
    return (
        <Card className='my-3 m-3' style={{ width: "200px" }}>
            
            <Card.Body >
                <Card.Title>{props.name}</Card.Title>
                <Input type="radio" id="tik" value="note"/>            
                <Delete style={{ cursor: "pointer" }}
                    onClick={() => props.addNote(props.id)}
                />
            </Card.Body>
        </Card>
    )
}
export default Person