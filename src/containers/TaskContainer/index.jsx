import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SaveForm } from "./forms/SaveForm";
import { yupResolver } from "@hookform/resolvers/yup";
import useInputState from "../../utils/hooks/useInputState";
import { ListTask } from "./lists";
import { ButtonAction } from "../../components/ButtonAction";
import { schemaTaskValidation } from "../../utils/validations/taskvalidation";
import { Container } from './lists/styles'
import { ConvertDatePtBr } from './../../utils/functions/convertDate';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import EditForm from "./forms/EditForm";



export const TaskContainer = () => {
    const methods = useForm({ resolver: yupResolver(schemaTaskValidation()), defaultValues: {} });
    const [lista, setLista] = useState([]);
    const [listaAtual, setListaAtual] = useState([]);
    const { handleSubmit } = methods; //errors, control
    const { value } = useInputState(); //desc, reset, onChange
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')

    const enviarTarefa = (todos) => {
        console.log('methods', methods);
        console.log('todos', todos);
        const novaTarefa = { id: Math.floor(Math.random() * 999 + 1), ...todos };
        console.log('novaTarefa', novaTarefa);
        setLista((prevState) => [...prevState, novaTarefa]);
        console.log("todos", todos);
        console.log("lista", lista);
    };

    useEffect(() => {
        if (lista.length > 0) {
            setListaAtual(lista)
        }
    }, [lista]);

    return (
        <>
            <FormProvider {...methods}>

                <SaveForm
                    onSumbit={handleSubmit(enviarTarefa)}
                    name={"name"}
                    desc={"desc"}
                    date={"date"}
                    defaultValue={value}
                    defaultValue={value}
                    defaultValue={value}
                    valueName={name}
                    valueDesc={desc}
                    valueDate={date}
                />
            </FormProvider>
            <Container>
                {/* ajustar CSS da List */}
                {listaAtual &&
                    listaAtual.map((task, index) => (
                        <div key={index}>
                            <ListTask
                                id={task.id}
                                name={task.name}
                                date={ConvertDatePtBr(task.date)}
                                description={task.desc}
                                actionsButtonItem={
                                    <>
                                        <ButtonAction
                                            ariaLabel={"Delete"}
                                            icon={<DeleteIcon />}
                                            onClickAction={() => {
                                                setLista(lista.length > 0 ? lista.splice(index) : []);
                                            }}
                                        />
                                        <ButtonAction
                                            ariaLabel={"Editar"}
                                            icon={<EditIcon />}
                                            onClickAction={() => {

                                                setName(task.name)
                                                setDesc(task.desc)
                                                setDate(task.date)

                                                console.log("Value Name :", task.name)

                                            }}
                                        />

                                    </>
                                }
                            />
                        </div>
                    ))}

            </Container>
        </>
    )
}   