import RegisterForm from "../components/RegisterForm/RegisterForm";

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

export default function RegisterPage() {
  return (
    <div style={style.container}>
      <title>Registration</title>
      <div style={style.formContainer}>
        <h1 style={style.title}>Create Your Account</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
