import React, { useEffect, useState } from 'react'
import List from './list';
import { Button, Container, Row } from 'react-bootstrap';

const Note = () => {

    const [note, setNote] = useState([]);
    
    
    const getMyData = async () => {
        await fetch('https://648df0f32de8d0ea11e868b3.mockapi.io/api')
            .then(response => response.json())
            .then(data => setNote(data))
            .catch(error => console.log(error.message));
    }

    
    useEffect(() => {
      getMyData();
    },[])
    

    return (

      <Container>
        <Row className='gap-1 mb-3'>
                {
                    note?.map((note) => (<List key={note.id} {...note} />))
                }
        </Row>
          <input id='sil' value={note} onChange={e => setNote(e.target.value)} />
          <Button id='sil' variant='danger'  onClick={() => setNote([])}>
                Delete
          </Button>
          <Button variant='success' onClick={() => setNote(note)}>
                Reload All
          </Button>
      </Container>


  
    )
}
export default Note