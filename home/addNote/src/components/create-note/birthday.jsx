import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import peopleData from "../../assets/data/people.json"
import Person from './person/person'
const Birthday = () => {
    const [people, setPeople] = useState(peopleData)
    const deletePerson = (id) => {
        const arr = people.filter((person) => person.id !== id);
        setPeople(arr);
    };
    return (
        <Container>
            <h2>My Notes</h2>
            <p>
                I have  {people.length} notes.
            </p>
            <Row>
                {
                    people.map((person) => (<Person key={person.id} {...person} deletePerson={deletePerson} />))
                }
            </Row>
            <ButtonGroup>
                <Button variant='danger' onClick={() => setPeople([])}>
                    Clean All notes
                </Button>
                <Button variant='success' onClick={() => setPeople(peopleData)}>
                    Bring back All notes
                </Button>
            </ButtonGroup>
        </Container>
    )
}
export default Birthday