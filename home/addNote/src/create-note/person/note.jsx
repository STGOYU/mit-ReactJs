import React, { useEffect, useState } from 'react'
import List from './list';
import { Button, Container, Row } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { VscArrowCircleDown } from 'react-icons/vsc';
import axios from 'axios';

const Note = () => {

    const [note, setNote] = useState([]);
   
    const onDelete = async (values) => {
      const dto = {
        id:values.id
      };
  
      try {
        const resp = await axios.delete(
          `https://648df0f32de8d0ea11e868b3.mockapi.io/note/${note.id}`,
          dto
        );
        console.log(resp);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    const getMyData = async () => {
        await fetch("https://648df0f32de8d0ea11e868b3.mockapi.io/note")
            .then(response => response.json())
            .then(data => setNote(data))
            .catch(error => console.log(error.message));
    }

    
    useEffect(() => {
      getMyData();
      
    },[])
    

    return (

      <Container >
        <Row className='gap-1 mb-3 '>
            {
              note?.map((note) => (<List key={note.id} {...note} onDelete={note.id}/>))
            }
            
        </Row>
        <Button variant='danger' onClick={() => onDelete(note.id) } style={{width:"5rem", height:"80px", marginTop:"2rem",alignItems:"center", justifyContent:"center"}}>
          <MdDelete/>
        </Button>

          <Button variant='success' onClick={() => getMyData()} style={{width:"5rem", height:"80px", marginTop:"2rem",alignItems:"center"}}>
            <VscArrowCircleDown />
          </Button>
      </Container>


  
    )
}
export default Note