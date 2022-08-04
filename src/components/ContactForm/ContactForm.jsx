import { Formik } from 'formik';
import * as yup from 'yup';
import { yupPhoneValidation } from 'schema';
import { Notify } from 'notiflix';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label } from "components/ui";
import { PrimaryButton } from "components/ui/buttons";
import { FormError, FormContact, FormInput } from "components/ui/formikElements";
import { 
  useCreateContactsMutation,
  useGetContactsQuery,
 } from "redux/contacts/contactsApi";


export const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactsMutation();
  const { data } = useGetContactsQuery();

  const initialValues = {
    name: '',
    phone: ''
  };
  
  const schema = yup.object({
    ...yupPhoneValidation,
    name: yup.string().required(),
  });

  const handleSubmit = (values, {resetForm}) => {
    const isContactExist = data.find(({name}) => name.toLowerCase() === values.name.toLowerCase());
    if(isContactExist){
      return Notify.info(`${values.name} is already in contacts`, 
      {position: 'center-top', info: {background: 'rgba(139, 6, 94)'}});
    };
    createContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>  
        <FormContact>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='text' name='name'/>
            <FormError name="name"/>
            <Label htmlFor='phone'><FaPhoneAlt/>Number</Label>
            <FormInput type="tel" name="phone"/>
            <FormError name="phone"/>
            <PrimaryButton type='submit' disabled={isLoading}>
              Add contact
            </PrimaryButton>
        </FormContact>
    </Formik>
  );
};



