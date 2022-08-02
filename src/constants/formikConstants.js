import * as yup from 'yup';

export const initialValues = {
    name: '',
    phone: ''
  };
  
export const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().required().test({
      test: (value) => (/^[\d+][\d()-]{4,16}\d$/i).test(value),
    }),
  });