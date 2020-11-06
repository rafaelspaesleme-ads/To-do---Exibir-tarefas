import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import Button from "@material-ui/core/Button";

import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoForm = ({ saveTodo }) => {
  const schema = yup.object().shape({
    name: yup.string().required("O campo tarefa não pode estar vazio."),
    desc: yup
      .string()
      .required("O campo descrição não pode estar vazio.")
      .min(10, "Preencha no mínimo 10 caracteres na descrição."),
    date: yup
      .number()
      .typeError("Só serão aceitos números")
      .required("Preencha a data de inicio dessa tarefa."),
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
    <>
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
            type="number"
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
      {/*  <ul>
        {lista &&
          lista.map((todos, index) => (
            <div id="listatotal">
              <li key={index}>
                <div id="lista">
                  <p>{todos.title}</p>
                  <p>{todos.desc}</p>
                  <p>{todos.date}</p>
                </div>
              </li>
            </div>
          ))}
      </ul> * */}

      <List>
        {lista &&
          lista.map((task, index, deleteTodo) => (
            <ListItem key={lista.id} dense button>
              <Checkbox tabIndex={-1} disableRipple />
              <ListItemText secondary={[lista]} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Delete"
                  aria-label="Edit"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default TodoForm;
