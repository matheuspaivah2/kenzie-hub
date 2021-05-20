import { Button, TextField } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const LoginForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha inválida"
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

  //Vamos continuar aqui
  const handleForm = (data) => {
    console.log(data);
    reset();
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Email"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
   
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Senha"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
    

      <div>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;

