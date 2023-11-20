import * as yup from 'yup';

const phoneValidationSchema = yup.object().shape({
  number: yup
    .string()
    .matches(/^\+237(6|2|3|7)\d{8}$/, 'Invalid Cameroon phone number')
    .required('Phone number is Required'),
});

export {phoneValidationSchema};
