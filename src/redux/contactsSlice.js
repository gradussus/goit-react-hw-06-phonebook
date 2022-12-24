import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      const includeName = () => {
        return state.contacts.find(
          e =>
            e.name.toLocaleLowerCase() ===
            action.payload.contactName.toLocaleLowerCase()
        );
      };
      const includeNumber = () => {
        return state.contacts.find(
          e => e.number === action.payload.contactNumber
        );
      };

      const contact = {
        id: nanoid(10),
        name: action.payload.contactName,
        number: action.payload.contactNumber,
      };
      if (includeName(contact.name)) {
        return alert(`${contact.name} is already in contacts`);
      }
      if (includeNumber(contact.number)) {
        return alert(`${contact.number} is already in contacts`);
      }
      state.contacts.push(contact);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(e => e.id !== action.payload);
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
