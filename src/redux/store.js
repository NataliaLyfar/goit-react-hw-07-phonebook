import { configureStore } from '@reduxjs/toolkit';
import {filterSlice} from'./contacts/filterSlice';
import { middleware } from './middleware';
import { contactsApi } from './contacts/contactsApi';



export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        [filterSlice.name]: filterSlice.reducer,
      },
      middleware: middleware,
});



