import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    name: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
  });