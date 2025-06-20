import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          Name
          <Field type="text" name="name" className={style.input} />
          <ErrorMessage name="name" component="div" className={style.error} />
        </label>
        <label className={style.label}>
          Number
          <Field type="tel" name="number" className={style.input} />
          <ErrorMessage name="number" component="div" className={style.error} />
        </label>
        <button className={style.button} type="submit" disabled={loading}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
