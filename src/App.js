import React, { useState, useCallback } from "react";
import { FormProvider, Controller, useForm } from "react-hook-form";

import "./app.css";
export default function App() {
  const [tasks, setTasks] = useState([]);

  const onSubmit = useCallback(
    ({ title, desc, data }) =>
      handleSubmit((prevState) => [
        ...prevState,
        { id: Math.random(), title, desc, data },
      ]),
    [setTasks]
  );

  const methods = useForm();

  const { handleSubmit } = methods;

  const enviarContato = () => {
    console.log(methods);
  };

/*   function handleAddTasks() {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: "Nova Tarefa",
        description: "arrumar erro",
      },
    ]);
  } */

  return (
    <>
      <div id="principal">
        <div id="container">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(enviarContato)}>
              <Controller
                as={<input />}
                type="text"
                name="title"
                placeholder="Tarefa"
              />
              <Controller
                as={<input />}
                type="text"
                name="desc"
                placeholder="Descrição"
              />
              <Controller
                as={<input />}
                type="text"
                name="date"
                placeholder="Data"
              />

              <button type="submit"> Enviar
                {/* loading ? "Enviando..." : "Enviar" */}
              </button>
            </form>
          </FormProvider>

          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.name}, {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
