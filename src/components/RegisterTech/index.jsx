import { Button, TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import './styles.css'
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify'


const RegisterTech = ({loadProfile}) => {

 
  
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
});

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
    
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const currencies = [
    {
      value: 'Iniciante',
      label: 'Iniciante',
    },
    {
      value: 'Intermediário',
      label: 'Intermediário',
    },
    {
      value: 'Avançado',
      label: 'Avançado',
    },
    
  ];
  
  const handleForm = (data) => {
    
    axios
      .post("https://kenziehub.me/users/techs",  
        data,
        {
        headers: { 
          Authorization: `Bearer ${token}` 
        },
        
      })
      .then((response) => {

        loadProfile()
        toast.success('Tecnologia cadastrada!')
        reset();
      
      })
      .catch((e) => {
        console.log(`err:${e}`)
        toast.error('Falha ao cadastrar tecnologia!')
      });
  };

  // const [currency, setCurrency] = useState('Iniciante');

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  //   console.log(currency)
  // };

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
      
    }
  }))
 
 
  const classes = useStyles()

  return (
    <form className='form-techs' onSubmit={handleSubmit(handleForm)}>
      <h3 className='title'>Nova Tecnologia</h3>
      <div>
        <TextField
          className={classes.inp}
          required
          margin="normal"
          variant="outlined"
          label="Title"
          size="small"
          color="primary"
          
          InputLabelProps={{className: classes.textField__label}}
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        >
          
        </TextField>
      </div>
      <div>
        <TextField
          className={classes.inp}
          InputLabelProps={{className: classes.textField__label}}
          margin="normal"
          variant="outlined"
          label="Status"
          name="status"
          select
          size="small"
          color="primary"
          
          
          {...register("status")}
          error={!!errors.title}
          id="standard-select-currency"
          helperText={errors.title?.message}
          
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
     
     

      <div>
        <Button className={classes.bt} type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default RegisterTech;
