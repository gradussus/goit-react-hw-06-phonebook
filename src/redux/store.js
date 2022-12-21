import {
    persistStore,
    PERSIST,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });