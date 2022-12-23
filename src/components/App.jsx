import {  useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');


  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // const filtredContacts = () => {
  //   return contacts.filter(c =>
  //     c.name.toLowerCase().includes(filter.toLocaleLowerCase())
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {/* {contacts.length !== 0 ? ( */}

        <>
        <Filter
          value={filter} changeFilter={changeFilter}
        />
          <ContactList
            // contacts={filtredContacts()}
            // deleteCont={deleteContact}
          />
        </>
      {/* ) : (
        <div>
          Your contacts are not here yet, but you can add contacts in the form
          above and save them in this app
        </div> */}
      {/* ) */}
      {/* } */}
    </Container>
  );
};
