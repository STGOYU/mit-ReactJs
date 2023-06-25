import React from "react";
import {
  Button,
  Card,
  Form,
  // Row,
} from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const NewNote = () => {
  const initialValues = {
    id: "",
    firstName: "",
    textArea: "",
  };
  const validationSchema = Yup.object({
    id: Yup.string()
      .min(1, "id en az 1 karakter olmalidir!")
      .required("id yi bos birakamazsiniz!"),
    title: Yup.string()
      .min(6, "title en az 5 karakter olmalidir!")
      .required("title i bos birakamazsiniz!"),
  });
  const onSubmit = async (values) => {
    const dto = {
      id: values.id,
      title: values.title,
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
    onSubmit: onSubmit,
  });
  return (
    <Card style={{ width: "18rem", height: "400px", marginBottom: "3rem" }}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit} className="gap-2">
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="Lutfen id giriniz..."
              {...formik.getFieldProps("id")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="what's your title"
              {...formik.getFieldProps("title")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.title && !formik.errors.title}
              isInvalid={formik.touched.title && formik.errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Row>
          {
            //                 note.map((person) => (<Person key={person.id} {...person} addNote={addNote} />))
          }
        </Row> */}

          <Button type="submit" variant="primary">
            Create Note
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default NewNote;
