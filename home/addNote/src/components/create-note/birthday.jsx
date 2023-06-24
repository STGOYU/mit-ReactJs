import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
 // Row,
} from "react-bootstrap";
//import peopleData from "../../assets/data/people.json";
//import Person from "./person/person";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const Birthday = () => {

  const initialValues = {
    id: "",
    firstName: "",
    textArea:""
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(6, "Notunuz en az 5 karakter olmalidir!")
      .required("Notunuzu bos birakamazsiniz!"),
  });
  const onSubmit = async (values) => {
    const dto = {
      id: values.id,
      title: values.title,
      textArea: values.textArea
    };
    try {
      const resp = await axios.put(
        `https://648a1ac55fa58521cab0d1de.mockapi.io/api/note/`,
        dto
      );
      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  });
  return (
    <Container>
      <Form noValidate onSubmit={formik.handleSubmit} className="gap-2">
      <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
                type="number"
                name="id"
                placeholder="Lutfen id giriniz..."
                    {...formik.getFieldProps("id")}
            />
        </Form.Group >
        <Form.Group className="mb-3" controlId="ControlInput">
          <Form.Label>Title</Form.Label>
          <Form.Control
           type="text"
           name='title' 
           placeholder="what's your title"
           value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.title && !formik.errors.title}
            isInvalid={formik.touched.title && formik.errors.title}
           />
           <Form.Control.Feedback type='invalid'>
                {formik.errors.title}
            </Form.Control.Feedback>
        </Form.Group>
        

        {/* <Row>
          {
            //                 note.map((person) => (<Person key={person.id} {...person} addNote={addNote} />))
          }
        </Row> */}
        <ButtonGroup className="gap-1">
          <Button type="submit" variant="primary">Create Note</Button>
          <Button variant="success">Bring back All notes</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};
export default Birthday;
