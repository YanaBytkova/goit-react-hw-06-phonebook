import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact, inputFilter} from 'redux/contacts/contacts.reducer';

import { nanoid } from 'nanoid';
import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  
const handleAddProduct = contactData => {
      const isExist = contacts.some(
        contact => contact.nameUser === contactData.nameUser
      );
  
      if (isExist) {
        alert(`${contactData.nameUser} is already in contacts.`);
        return
      }
  
      const finalNames = {
        ...contactData,
        id: nanoid(),
      };
      dispatch(addContact(finalNames));
  
    };

    const handleDeleteContacts = contactId => {
      dispatch(deleteContact(contactId));
    };
    
  const getFilteredContacts = (value) => {
      
    if (value) {
      const filterWord = value;
      return contacts.filter(contact =>
        contact.nameUser.toLowerCase().includes(filterWord.toLowerCase()))
      
      // dispatch(filterContact(value));
      // return contacts
      
    } 
    return contacts
  }

  const handleInputFilter = event => {
    const value = event.target.value;
    dispatch(inputFilter(value));
    
  };
 
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={handleAddProduct}/>
        <h2>Contacts</h2>
        <Filtering filter={filter} handleInputFilter={handleInputFilter}/>
        <ContactList contacts={getFilteredContacts(filter)} handleDeleteContacts={handleDeleteContacts}/>
     </div>
    );
  }


