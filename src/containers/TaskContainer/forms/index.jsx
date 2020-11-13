import React from "react";
import { FieldTextSimple } from "../../../components/FieldTextSimple";
import { ButtonSave } from "../../../components/ButtonSave";
import { useStyles } from './styles'

export const FormTaskContainer = ({ onSumbit, name, desc, date, defaultValue }) => {

    const styles = useStyles()
    return (
        <>


            <form className={styles.form} onSubmit={onSumbit}>
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

                <ButtonSave className={styles.button}
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    titleButton={"SALVAR"}
                />
            </form>

        </>
    )
}

export default FormTaskContainer