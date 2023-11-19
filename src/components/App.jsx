import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact, filterContact, inputFilter} from 'redux/contacts/contacts.reducer';
// import { inputFilter } from 'redux/filter/filter.reducer';
// import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(stringifiedContacts);

  //   return parsedContacts;
  // });

      // const [filter, setFilter] = useState('');


      // useEffect(() => {
      //   const stringifiedContacts = JSON.stringify(contacts);
      //   localStorage.setItem('contacts', stringifiedContacts);
      // }, [contacts]);


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
    
  const getFilteredContacts = () => {
      console.log("filter", filter);
    if (filter) {
      // const filterWord = value;
      console.log("value2: ", filter);
      // return contacts.filter(contact =>
      //   contact.nameUser.toLowerCase().includes(filterWord.toLowerCase()))
      
      dispatch(filterContact(filter));
      // return contacts
      
    } 
    return contacts
  }

  const handleInputFilter = event => {
    const value = event.target.value;
    dispatch(inputFilter(value));
    
    // setFilter(value);
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


