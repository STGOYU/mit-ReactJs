import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  // Row,
} from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { VscEmptyWindow} from "react-icons/vsc";

const NewNote = () => {
  const initialValues = {
    textarea:""
   
  };
  const validationSchema = Yup.object({
    textarea: Yup.string()
      .min(1, "textarea en az 1 karakter olmalidir!")
      .required("textarea i bos birakamazsiniz!"),
   
  });
  const onSubmit = async (values) => {
    const dto = {
      textarea:values.textarea
    };

    try {
      const resp = await axios.post(
        "https://648df0f32de8d0ea11e868b3.mockapi.io/note/",
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
    <Card style={{ width: "18rem", height: "250px", marginBottom: "3rem", padding:"0", display:"inline-block"}}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit} className="gap-2">
        <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="textarea"
              placeholder="what's your text ?"
              value={formik.values.textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.textarea && !formik.errors.textarea}
              isInvalid={formik.touched.textarea && formik.errors.textarea}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.textarea}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary" style={{width:"5rem", height:"80px", marginTop:"2rem",alignItems:"center"}}>
          <VscEmptyWindow/>
          </Button>
          
        </Form>
      </Card.Body>
    </Card>
    </Container>
  );
};
export default NewNote;
