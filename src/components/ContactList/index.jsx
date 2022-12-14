import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import ContactItem from "components/ContactItem";
import styles from './contactList.module.css';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map(contact => {
                return <ContactItem
                    key={contact.id}
                    contact={contact}
                />
            })}
        </ul>
    );
};