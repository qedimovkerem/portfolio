import * as Yup from 'yup';


let registerSchema = Yup.object().shape({
    name: Yup.string().required(),
    username: Yup.string().min(5).required(),
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Sifrede boyuk herf kicik herf ve reqem olmalidir").min(6).required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required(),
  });

  export { registerSchema };