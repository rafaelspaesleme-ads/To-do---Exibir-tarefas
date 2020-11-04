import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import { useForm } from "react-hook-form";

const NewForm = () => {
  const { register, handleSubmit } = useForm();

  const newTask = (task) => {
    console.log(task);
  };
;

return (
  <form onSubmit={handleSubmit(newTask)}>
  <input
        name="task"
        ref={register({
          required: "Required",
          pattern: {
            message: ""
          }
        })}
      />
      <button>Enviar</button>
  </form>
)


}

export default NewForm;