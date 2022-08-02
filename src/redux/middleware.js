import { contactsApi } from './contacts/contactsApi';

export const middleware = getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware];