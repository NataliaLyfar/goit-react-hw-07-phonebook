import * as yup from 'yup';

export const yupPhoneValidation = ({
    phone: yup.string().required().test({
      test: (value) => (/^[\d+][\d()-]{4,16}\d$/i).test(value),
    }),
  });

