import React, { useState } from "react";
import useForm from "./hooks/useForm";

import "./app.css";
export default function App() {
  const [tasks, setTasks] = useState([
    /* { id: 1, name: "tarefa 1", description: "arrumar o erro 1" },
    { id: 2, name: "tarefa 2", description: "arrumar o erro 2" },
    { id: 3, name: "tarefa 3", description: "arrumar o erro 3" }, */
  ]);
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  function handleAddTasks() {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: "Nova Tarefa",
        description: "arrumar erro",
      },
    ]);
  }

  return (
    <>
      <div id="principal">
        <div id="container">
        <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Tarefa"
        />
        <input
          onChange={handleChange}
          type="text"
          name="desc"
          placeholder="Descricao "
        />
        <input
          onChange={handleChange}
          type="text"
          name="data"
          placeholder="Data"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
        
        
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
