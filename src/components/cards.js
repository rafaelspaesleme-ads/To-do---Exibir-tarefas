import React, { useState } from "react";
import '../App.css'
const initialState = [];

export default function Cards() {
  const [lista, setLista] = useState(initialState);
  function excluirTask(index) {
    const deletar = lista.filter((_, ind) => ind !== index);
    console.log(index);

    setLista(deletar);
  }
  return (
    <>
      <ul>
        {lista &&
          lista.map((task, index) => (
            <div id="listatotal">
              <li key={index}>
                <div id="lista">
                  <input defaultValue={task.title}></input>
                  <input defaultValue={task.desc}></input>
                  <input defaultValue={task.date}></input>
                  {/* <p>{task.title}</p> */}
                  {task.favote && <span>(Favorito)</span>}
                  {/*  <p>{task.desc}</p>
                      <pri>{task.date}</pri> */}
                  <button onClick={() => excluirTask(index)}>
                    Concluir Tarefa
                  </button>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </>
  );
}
