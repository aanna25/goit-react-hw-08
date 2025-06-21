import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import LoginForm from "../components/LoginForm/LoginForm";

const style = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    color: "#1976d2",
    marginBottom: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <title>Login</title>
      <div style={style.container}>
        <div style={style.formContainer}>
          <h1 style={style.title}>Login to Your Account</h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
