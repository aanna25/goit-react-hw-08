import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import style from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(login(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully login`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          Email
          <Field type="email" name="email" className={style.input} />
          <ErrorMessage name="email" component="div" className={style.error} />
        </label>
        <label className={style.label}>
          Password
          <Field type="password" name="password" className={style.input} />
          <ErrorMessage
            name="password"
            component="ErrorMessage"
            className={style.error}
          />
        </label>
        <button type="submit" className={style.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
}
