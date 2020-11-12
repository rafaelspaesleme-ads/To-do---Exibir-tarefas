import * as yup from "yup";

export const schemaTaskValidation = () => yup.object().shape({
    name: yup.string().required("O campo tarefa não pode estar vazio."),
    desc: yup
        .string()
        .required("O campo descrição não pode estar vazio.")
        .min(10, "Preencha no mínimo 10 caracteres na descrição."),
    date: yup
        .string()
        .typeError("Só serão aceitos números")
        .required("Preencha a data de inicio dessa tarefa."),
});
  
