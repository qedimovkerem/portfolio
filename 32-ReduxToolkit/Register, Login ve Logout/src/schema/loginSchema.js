import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required().min(6)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
  });