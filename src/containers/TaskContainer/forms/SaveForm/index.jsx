import React from "react";
import {FieldTextSimple} from "../../../../components/FieldTextSimple";
import {ButtonSave} from "../../../../components/ButtonSave";
import {useStyles} from './styles'
import CheckFavorite from './../../../../components/CheckFavorite/index';


export const SaveForm = ({onSumbit, name, desc, date, important, register, control}) => {

    const styles = useStyles()

    return (
        <>
            <form className={styles.form} onSubmit={onSumbit}>
                <FieldTextSimple
                    placeholder={'Digite o nome'}
                    name={name}
                    register={register}
                    type={"text"}
                    control={control}
                />
                <FieldTextSimple
                    placeholder={'Digite a descrição'}
                    name={desc}
                    register={register}
                    type={"text"}
                    control={control}
                />
                <FieldTextSimple
                    placeholder={'Digite a data'}
                    name={date}
                    register={register}
                    type={"date"}
                    control={control}
                />
                <CheckFavorite
                    label={"Importante"}
                    name={important}
                    register={register}
                    type={"checkbox"}
                    control={control}
                />
                <ButtonSave
                    className={styles.button}
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    titleButton={"SALVAR"}
                />
            </form>

        </>
    )
}

export default SaveForm