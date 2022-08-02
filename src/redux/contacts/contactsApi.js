import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://62e7ffdf249bb1284ea6c7a0.mockapi.io/', 
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