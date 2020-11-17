import React, { useState } from "react";
import { FieldTextSimple } from "../../../../components/FieldTextSimple";
import { ButtonSave } from "../../../../components/ButtonSave";
import { useStyles } from './styles'
import CheckFavorite from './../../../../components/CheckFavorite/index';
import TextField from '@material-ui/core/TextField';
import Favorite from '@material-ui/icons/Favorite';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Switch } from "@material-ui/core";



export const SaveForm = ({ onSumbit, name, desc, date, defaultValue, valueName, valueDesc, valueDate, important, valueImportant }) => {

    const styles = useStyles()
    const [checked, setChecked] = useState(true)
    const handleChange = (event) => {
        console.log('Console do checkbox', event)
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };



    return (
        <>




            <form className={styles.form} onSubmit={onSumbit}>
                <FieldTextSimple
                    as={TextField}
                    placeholder={'Digite o nome'}
                    name={name}
                    defaultValue={defaultValue}
                    type={"text"}
                    value={valueName}
                />
                <FieldTextSimple
                    as={TextField}
                    placeholder={'Digite a descrição'}
                    name={desc}
                    defaultValue={defaultValue}
                    type={"text"}
                    value={valueDesc}
                />
                <FieldTextSimple
                    as={TextField}
                    placeholder={'Digite a data'}
                    name={date}
                    defaultValue={defaultValue}
                    type={"date"}
                    value={valueDate}
                />
                <FieldTextSimple
                    as={Checkbox}
                    label={'Importante'}
                    name={important}
                    defaultValue={defaultValue}
                    type={"Checkbox"}
                    value={valueImportant}
                    checked={checked}
                    onChange={() => 
                        { 
                            console.log('Titulo do checked', checked) 
                            setChecked(checked ? true : false) }}
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

export default SaveForm