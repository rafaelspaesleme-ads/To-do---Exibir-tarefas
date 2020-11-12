import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormTaskContainer } from "./forms";
import { yupResolver } from "@hookform/resolvers/yup";
import useInputState from "../../utils/hooks/useInputState";
import { List } from "@material-ui/icons";
import { ListTask } from "./lists";
import { ButtonDelete } from "../../components/ButtonDelete";
import { schemaTaskValidation } from "../../utils/validations/taskvalidation";
import { Container, FormStyle } from './lists/styles'


export const TaskContainer = () => {
    const methods = useForm({ resolver: yupResolver(schemaTaskValidation()), defaultValues: {} });
    const [lista, setLista] = useState([]);
    const [listaAtual, setListaAtual] = useState([]);
    const { handleSubmit } = methods; //errors, control
    const { value } = useInputState(); //desc, reset, onChange

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
                
                <FormTaskContainer
                    onSumbit={handleSubmit(enviarTarefa)}
                    name={"name"}
                    desc={"desc"}
                    date={"date"}
                    defaultValue={value}
                />
            </FormProvider>
            <Container>
                {/* ajustar CSS da List */}
                {listaAtual &&
                    listaAtual.map((task, index) => (
                        <>
                            <ListTask
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                date={task.date}
                                description={task.desc}
                                actionsButtonItem={
                                    <>
                                        <ButtonDelete
                                            onClickDelete={() => {
                                                setLista(lista.filter((_, idx) => idx !== index));
                                            }}
                                        />
                                    </>
                                }
                            />
                        </>
                    ))}

            </Container>
        </>
    )
}