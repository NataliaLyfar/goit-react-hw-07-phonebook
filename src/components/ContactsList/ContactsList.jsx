import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import { getFilter } from "redux/contacts/contactsSelectors";
import { SpinnerDotted } from 'spinners-react';
import { Contact } from "./Contact";
import { List } from "components/ui";
import { useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";



export const ContactsList = () => {
  const filter = useSelector(getFilter);

  const checkedContacts = useMemo(() => {
    return createSelector(
      [res => res.data, (_, filter) => filter],
      (contacts, filter) => 
        contacts?.filter(({name}) => {
          return name.toLowerCase().includes(filter.toLowerCase());
          }).sort((a, b) => a.name.localeCompare(b.name)) ?? [],
    );
  },[]);

  const { filteredContacts, isFetching} = useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: checkedContacts(result, filter)
      };
    },
  });

  return (
    <>
      {isFetching && <SpinnerDotted />}
      <List>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact}/>)
        )}
      </List>
    </>
  );
};


