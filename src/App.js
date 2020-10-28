import React, { useState } from "react";
import { FormProvider, Controller, useForm } from "react-hook-form";

import "./app.css";

export default function App() {



  const methods = useForm();

  const { handleSubmit } = methods;
 
  const { control } = useState("");
  const enviarContato = () => {   
      console.log(handleSubmit);  
  }

  return (
    <>
      <div id="principal">
        <div id="container">
          <FormProvider {...methods}>
            <form onSubmit={() => handleSubmit(enviarContato)}>
              <Controller
                /*   value={title}
                onChange={(e) => setTitle(e.target.value)} */
                defaultValue=""
                as={<input />}
                control={control}
                name="title"
                placeholder="Tarefa"
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
              />

              <button type="submit"> Enviar</button>
            </form>
          </FormProvider>

        {/*   <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.name}, {task.description}
              </li>
            ))} 
          </ul>*/}

          <ul>Tarefa 1</ul>
          <ul>Tarefa 2</ul>
          <ul>Tarefa 3</ul>
          <ul>Tarefa 4</ul>
        </div>
      </div>
    </>
  );
}
