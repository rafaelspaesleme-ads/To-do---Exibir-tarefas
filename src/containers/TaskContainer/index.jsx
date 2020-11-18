import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {SaveForm} from "./forms/SaveForm";
import {yupResolver} from "@hookform/resolvers/yup";
import {ListTask} from "./lists";
import {ButtonAction} from "../../components/ButtonAction";
import {schemaTaskValidation} from "../../utils/validations/taskvalidation";
import {Container} from './lists/styles'
import {ConvertDatePtBr} from '../../utils/functions/convertDate';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const TaskContainer = () => {
    const {register, handleSubmit, control} = useForm({resolver: yupResolver(schemaTaskValidation())});
    const [listaAtual, setListaAtual] = useState([]);
    const [lista, setLista] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleSaveTask = (task) => {
        console.log('task', task);
        const newTask = {id: Math.floor(Math.random() * 999 + 1), ...task};
        console.log('novaTarefa', newTask);
        setLista((prevState) => [...prevState, newTask]);
        console.log("lista", lista);
    }

    const handleUpdateTask = (task, index, list) => {
        setUpdate(true);
        console.log('list', list);
        console.log('task', task);
        console.log('index', index);
        let arr = list.splice(index, 1, task);
        console.log('item excluido', arr);
        console.log('lista atualizada', list);
        setLista(list);
    }

    useEffect(() => {
        if (lista.length > 0) {
            setListaAtual(lista)
        }
        if (update) {
            setListaAtual(lista);
            console.log('listaaaaa', lista);
        }
    }, [lista, update]);

    return (
        <>
            <SaveForm
                onSumbit={handleSubmit(handleSaveTask)}
                name={"name"}
                desc={"desc"}
                date={"date"}
                important={"important"}
                register={register}
                control={control}
            />
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
                                        icon={<DeleteIcon/>}
                                        onClickAction={() => {
                                            setLista(lista.length > 0 ? lista.splice(index) : []);
                                        }}
                                    />
                                    <ButtonAction
                                        ariaLabel={"Editar"}
                                        icon={<EditIcon/>}
                                        onClickAction={() => {

                                            console.log("Value Name :", task.name)

                                        }}
                                    />
                                    <ButtonAction
                                        ariaLabel={"Editar"}
                                        icon={task.important ? <FavoriteIcon color="secondary"/> : <FavoriteBorderIcon />}
                                        onClickAction={() => {
                                            const data = {
                                                id: task.id,
                                                name: task.name,
                                                desc: task.desc,
                                                date: task.date,
                                                important: !task.important
                                            }
                                            handleUpdateTask(data, index, listaAtual);
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