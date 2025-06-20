import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
