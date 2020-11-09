import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, listContainer, Global } from "./styles";
import TodoList from "./TodoList";


const TodoForm = ({ saveTodo }) => {
  const [lista, setLista] = useState([]);
  const [componente, setComponente] = useState(false);
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
  const { handleSubmit, errors, control } = methods;
  const { value, desc, reset, onChange } = useInputState();
  const enviarTarefa = (todos) => {
    const novaTarefa = { id: Math.floor(Math.random() * 999 + 1), ...todos };
    console.log("novaTarefa", novaTarefa);
    setLista((prevState) => [...prevState, novaTarefa]);
  };

  useEffect(() => {
    if (lista !== []) {
      setComponente(true);
    }

    console.log("Handle : todoForm");
  }, [lista]);
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
            defaultValue={""}
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
      <Container>
        {lista &&
          lista.map((task, index, _) => (
            <TodoList
              task={task}
              index={index}
              _={_}
              array={lista}
              onClickDelete={() => {
                const newTodos = lista.filter((_, idx) => idx !== index);
                setLista(newTodos);
              }}
            />
          ))}
      </Container>
    </>
  );
};
export default TodoForm;
