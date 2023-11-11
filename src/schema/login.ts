import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(5, 'Matricule number must be at least 5 characters')
    .required('Matricule number is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export {loginValidationSchema};
