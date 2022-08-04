import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants';


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BASE_URL}`, 
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['contact'],
    }),
    createContacts: builder.mutation({
        query: ({ name, phone }) => ({
            url: '/contacts',
            method: 'POST',
            body: { name, phone },
        }),
        invalidatesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['contact'],
    }),
  }),
});

export const { 
    useGetContactsQuery,
    useCreateContactsMutation,
    useDeleteContactMutation 
} = contactsApi;