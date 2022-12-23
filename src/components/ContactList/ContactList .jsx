import PropTypes from 'prop-types';
import { Item, List, DeleteBtn } from './ContactList.styled';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';



export const ContactList = () => {
  const dispatch = useDispatch();
  
  const removeContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  const contacts = useSelector(getContacts);
  return (
    <List>
      {contacts.map(c => (
        <Item key={c.id}>
          <span>{c.name}</span>
          <span>{c.number}</span>
          <DeleteBtn id={c.id} onClick={removeContact}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
