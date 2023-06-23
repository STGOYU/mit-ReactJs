import React, {useState }  from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { BsFillPatchPlusFill} from 'react-icons/bs'
import { BsFillPatchMinusFill} from 'react-icons/bs'
import { BsFillRCircleFill} from 'react-icons/bs'
import Progress from 'react-bootstrap/ProgressBar';

const Counter10 = () => {
   
    
    const [counter, setCounter] = useState(0);  
    
    function AnimatedExample() {      
        return <Progress animated now={counter}  label={`${counter}%`}   />;
      }


  return (
    <Container>
            <ButtonGroup>
            <Button variant='danger' onClick=
            {
                
                ()=> setCounter((prev) => prev >= 100 ? setCounter(100) : prev + 10)
                

            }> <BsFillPatchPlusFill/></Button>
         
            <Button variant='success' onClick=
            {
                () => setCounter((prev) => prev <=0 ? setCounter(0) : prev - 10)
            }
            ><BsFillPatchMinusFill/></Button>
            <Button variant='info' onClick={()=> setCounter(0)}><BsFillRCircleFill/></Button>           
            
        </ButtonGroup>
        <hr />
        <Button variant='secondary disabled'>{counter}</Button>
       {AnimatedExample()}
    </Container>
  )
}

export default Counter10;