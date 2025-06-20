import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <div className={style.error}>Sorry, something went wrong {error}</div>;
};

export default ErrorMessage;
