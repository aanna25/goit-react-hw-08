import { FaUser, FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)).unwrap();
  };
  return (
    <li className={style.item}>
      <div>
        <p>
          <FaUser className={style.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button
        className={style.button}
        onClick={handleDelete}
        disabled={loading}
      >
        Delete
      </button>
      {error && <div className={style.error}>Error: {error}</div>}
    </li>
  );
}

export default Contact;
