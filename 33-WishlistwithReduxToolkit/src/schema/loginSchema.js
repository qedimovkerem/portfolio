import * as Yup from 'yup';


let loginSchema = Yup.object().shape({
    username: Yup.string().min(5).required(),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Sifrede boyuk herf kicik herf ve reqem olmalidir").min(6).required(),
  });

  export { loginSchema };