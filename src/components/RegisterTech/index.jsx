import { Button, TextField } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

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

  
  const handleForm = (data) => {
    console.log(data);
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
    
        reset();
      
      })
      .catch((e) => console.log(`err:${e}`));
  };


 

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <h3>Cadrastro de Novas Tecnologias</h3>
      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Title"
          size="small"
          color="primary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Status"
          name="status"
          size="small"
          color="primary"
          {...register("status")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      </div>
     

      <div>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default RegisterTech;
