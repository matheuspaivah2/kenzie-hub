import { Button, TextField } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
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
          label="Nome"
          name="name"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
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
        <TextField
          margin="normal"
          variant="outlined"
          label="Bio"
          size="small"
          color="primary"
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Contato"
          size="small"
          color="primary"
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          variant="outlined"
          label="Módulo do curso"
          size="small"
          color="primary"
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
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

export default FormRegister;
