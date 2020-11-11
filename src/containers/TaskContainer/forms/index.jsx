import React from "react";
import {FieldTextSimple} from "../../../components/FieldTextSimple";
import {ButtonSave} from "../../../components/ButtonSave";

export const FormTaskContainer = ({onSumbit, name, desc, date, defaultValue}) => {

    return (
        <>
            <form onSubmit={onSumbit}>
                <FieldTextSimple
                    placeholder={'Digite o nome'}
                    name={name}
                    defaultValue={defaultValue}
                    type={"text"}
                />
                <FieldTextSimple
                    placeholder={'Digite a descrição'}
                    name={desc}
                    defaultValue={defaultValue}
                    type={"text"}
                />
                <FieldTextSimple
                    placeholder={'Digite a data'}
                    name={date}
                    defaultValue={defaultValue}
                    type={"date"}
                />
                <ButtonSave
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    titleButton={"SALVAR"}
                />
            </form>
        </>
    )
}