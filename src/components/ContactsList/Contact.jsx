import PropTypes from 'prop-types';
import styled from "styled-components";
import { useDeleteContactMutation } from "redux/contacts/contactsApi";
import { IconButton } from 'components/ui/buttons';
import {FaUserMinus} from "react-icons/fa";


const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: ${p => p.theme.space[1]}px;
box-shadow: 0px 14px 5px -5px ${p => p.theme.colors.tertiary};
`;

export const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem key={id} id={id}>
      {name}: {phone}
      <IconButton 
        onClick={() => deleteContact(id)}
        disabled={isDeleting}>
        <FaUserMinus/>
      </IconButton>
    </ListItem> 
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

