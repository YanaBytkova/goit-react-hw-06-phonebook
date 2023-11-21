import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.reducer';

const ContactItem = () => {
      const dispatch = useDispatch();
      let contacts = useSelector(state => state.contactsStore.contacts);
      const filterContacts = useSelector(state => state.contactsStore.filterContacts);
      const filter = useSelector(state => state.contactsStore.filter);
      if (filter.length > 0) {
           contacts = filterContacts;    
      }

      const handleDeleteContacts = contactId => {
            dispatch(deleteContact(contactId));
          };
      
      
      return (
            
            contacts.map(contact => (
                  <li key={contact.id} className={css.item}>
                        <span className={css.name}>{contact.nameUser}</span>
                        <span className={css.number}>{contact.number}</span>
                         <button className={css.button} onClick={() => handleDeleteContacts(contact.id)}
                        type="button">Delete</button>
                  </li>

            ))  
      )  ; 
          
      
};
export default ContactItem;