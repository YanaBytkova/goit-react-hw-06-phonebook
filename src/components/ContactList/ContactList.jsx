
import css from './ContactList.module.css';
// import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';


const ContactList = () => {
  // const contacts = useSelector(state => state.contactsStore.contacts);
  // const filterContacts = useSelector(state => state.contactsStore.filterContacts);
  // const filter = useSelector(state => state.contactsStore.filter);
  return (
      <div>
        
        <ul className={css.list}>
          <ContactItem /> 
          {/* {filter.length > 0 && <ContactItem contacts={filterContacts} />}
          {(contacts !== null && filter === "") && <ContactItem contacts={contacts} />} */}
          
        </ul>
      </div>
  )

}
export default ContactList;
    
    



