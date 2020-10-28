import React, { useState } from "react";
import { FormProvider, Controller, useForm } from "react-hook-form";

import "./app.css";

export default function App() {
  const methods = useForm();

  const { handleSubmit, control } = methods;

  const [tarefa, setTarefa] = useState({});
  const [lista, setLista] = useState([]);
  const enviarContato = (data) => {
    const novaTarefa = { id: Math.floor(Math.random() * 999 + 1), ...data };
    setLista((prevState) => [...prevState, novaTarefa]);
    console.log("lista", lista);
  };

  return (
    <>
      <div id="principal">

        <div id="container">
        <h1>-----TAREFAS----</h1>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(enviarContato)}>
              <Controller
                /*   value={title}
                onChange={(e) => setTitle(e.target.value)} */
                defaultValue=""
                as={<input />}
                control={control}
                name="title"
                placeholder="Tarefa"
                required
              />
              <Controller
                /*  value={desc}
                onChange={(e) => setDesc(e.target.value)} */
                as={<input />}
                defaultValue=""
                control={control}
                type="text"
                name="desc"
                placeholder="Descrição"
                required
              />
              <Controller
                as={<input />}
                /*  value={date}
                onChange={(e) => setDate(e.target.value)} */
                control={control}
                defaultValue=""
                type="text"
                name="date"
                placeholder="Data"
                required
              />

              <button type="submit"> Enviar</button>
            </form>
          </FormProvider>

          <ul>
            {lista &&
              lista.map((task) => (
                <div id="listatotal">
                  <li key={task.id}>
                    <div id="lista">
                      <p>{task.title}</p>
                      <p>{task.desc}</p>
                      <p>{task.date}</p>
                      <button>Concluir Tarefa</button>
                    </div>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
