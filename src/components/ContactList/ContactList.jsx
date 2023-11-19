
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
// import { useSelector } from 'react-redux';

const ContactList = ({contacts, handleDeleteContacts}) => {
  // const contacts = useSelector(state => state.contactsStore.contacts);
  console.log(contacts);
  return (
      <div>
        
        <ul className={css.list}>
          
            <ContactItem contacts={contacts} handleDeleteContacts={handleDeleteContacts}/>
          
        </ul>
      </div>
  )

}
export default ContactList;
    
    



