import * as yup from 'yup';
const transcriptValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 5 characters')
    .required('Full Name Number is required'),
  matricule: yup
    .string()
    // .matches(/(\w.+\s).+/, 'Enter at least 5 characters')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Matricule is required'),
  level: yup
    .string().
    required('Level is required'),
  date: yup
    .string().
    required('Academic Year is required'),
  type: yup
    .string().
    required('Application Type is required'),
});

export default transcriptValidationSchema;
