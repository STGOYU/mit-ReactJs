import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Birthday from '../birthday';


const AddNote = () => {
    const initialValues = {
        id:"",
        firstName: "", 
         
    };
    const validationSchema = yup.object({
        firstName: yup.string()
            .min(6, "Notunuz en az 5 karakter olmalidir!")
            .required("Notunuzu bos birakamazsiniz!")
        });
        const onSubmit = async (values) => {
        const dto = {
            id: values.id,
            firstName: values.firstName,
            
            
          
        }
        try {
            const resp = await axios.put(`https://648a1ac55fa58521cab0d1de.mockapi.io/api/note/`, dto);
            console.log(resp)
        } catch (error) {
            console.log(error.message)
        }
    };
    
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })
  return (
    <Container>
    <h2>TAKE A NOTE</h2>
   
    <Form noValidate onSubmit={formik.handleSubmit}>
    <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        placeholder="Lutfen id giriniz..."
                        {...formik.getFieldProps("id")}
                    />
                </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
                type='text'
                name='firstName'
                placeholder="Lutfen notunuzu giriniz..."
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.firstName && !formik.errors.firstName}
                isInvalid={formik.touched.firstName && formik.errors.firstName}
            />
            <Form.Control.Feedback type='invalid'>
                {formik.errors.firstName}
            </Form.Control.Feedback>
        </Form.Group>
               
        <Button type='submit'>
            Create Note
        </Button>
        <br />
        <hr />
        <Birthday/>

    </Form>
</Container>
  )
}
export default AddNote