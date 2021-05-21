import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { toast } from 'react-toastify'
import axios from "axios";

const FormLogin = ({setIsValidated}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    axios.post("https://kenziehub.me/sessions", data)
    .then((response) => {
      console.log(response);
      localStorage.clear();
      localStorage.setItem("token", JSON.stringify(response.data.token));
      setIsValidated(true);
      reset();
      toast.success('Bem vindo!')
      history.push("/home");
    })
    .catch((res) => toast.error('Email ou senha inválidos'))
  };

  const useStyles = makeStyles((theme) => ({
    inp: {
      backgroundColor: 'white',
      borderRadius: '4px',
      width: '200px',
      borderColor: 'white',
      border: '1px solid',
      
     
    },
    textField__label:{
      color: '#1b2766 !important' ,
      
      fontWeight: 'bolder',
    },
    bt: {
      backgroundColor: '#1b2766',
      fontWeight: 'bolder',
      marginTop: '25px',
    }
  }))
 
 
  const classes = useStyles()

  return (
    <form className='formLogin' onSubmit={handleSubmit(handleForm)}>
        <h2>Login</h2>
        <TextField
          className={classes.inp}
          required
          margin="normal"
          variant="outlined"
          label="Email"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      
      
        <TextField
          className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Password"
          name="password"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      
      <div>
        <Button className={classes.bt} type="submit" variant="contained" color="primary">
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
