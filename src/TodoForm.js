import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import Button from "@material-ui/core/Button";

import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const TodoForm = ({ saveTodo }) => {
  const schema = yup.object().shape({
    name: yup.string().required("O campo tarefa não pode estar vazio."),
    desc: yup
      .string()
      .required("O campo descrição não pode estar vazio.")
      .min(10, "Preencha no mínimo 10 caracteres na descrição."),
    date: yup.number("Datas só contém números").required("Preencha a data de inicio dessa tarefa."),
  });
  const methods = useForm({ resolver: yupResolver(schema), defaultValues: {} });

  const [lista, setLista] = useState([]);

  const { handleSubmit, errors, control } = methods;
  const { value, desc, reset, onChange } = useInputState();

  const enviarTarefa = (todos) => {
    const novaTarefa = { id: Math.floor(Math.random() * 999 + 1), ...todos };
    setLista((prevState) => [...prevState, novaTarefa]);

    console.log("todos", todos);
    console.log("lista", lista);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(enviarTarefa)}>
        <Controller
          as={TextField}
          variant="outlined"
          placeholder="Incluir tarefa"
          margin="normal"
          name="name"
          defaultValue={value}
        />
        <p> {errors.name?.message}</p>
       
        <Controller
          as={TextField}
          variant="outlined"
          placeholder="Incluir descrição"
          margin="normal"
          name="desc"
          defaultValue={""}
        />
        <p>{errors.desc?.message}</p>

        <Controller
          as={TextField}
          variant="outlined"
          placeholder="Incluir data"
          margin="normal"
          name="date"
          defaultValue={""}
        />
        <p> {errors.date?.message}</p>
       
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </FormProvider>
  );
};

export default TodoForm;
