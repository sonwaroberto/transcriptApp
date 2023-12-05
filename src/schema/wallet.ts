import * as yup from 'yup';
const walletValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/^\+237(6|2|3|7)\d{8}$/, 'Invalid Cameroon phone number')
    .required('Phone number is required'),
});

export default walletValidationSchema;
