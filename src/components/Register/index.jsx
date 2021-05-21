import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import './styles.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { toast } from 'react-toastify'
import axios from "axios";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup.string().min(2,'Mínimo 2 caracteres').required("Campo obrigatório"),
    bio: yup.string().min(6,'Mínimo seis caracters').required("Campo obrigatório"),
    course_module: yup.string().min(2,'Mínimo dois caracteres').required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
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
    
    axios
      .post("https://kenziehub.me/users", data)
      .then((response) => {
        toast.success('Sucesso ao criar a conta!')
        reset();
        history.push("/");
      })
      .catch((e) => {
        
        toast.error('Erro ao criar a conta!')
      })
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
    
    <form className='formSingup' onSubmit={handleSubmit(handleForm)}>
      <h2>Cadastro</h2>
      <div>
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
      </div>
      <div>
        <TextField
          className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Nome"
          name="name"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Senha"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Bio"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />
      </div>
      <div>
        <TextField
         className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Contato"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
      </div>
      <div>
        <TextField
          className={classes.inp}
          margin="normal"
          variant="outlined"
          label="Módulo do curso"
          size="small"
          color="primary"
          InputLabelProps={{className: classes.textField__label}}
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
        />
      </div>

      <div>
        <Button className={classes.bt} type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default Register;
