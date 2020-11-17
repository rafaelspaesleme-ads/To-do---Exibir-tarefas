import React from "react";
import { FieldTextSimple } from "../../../../components/FieldTextSimple";
import { ButtonSave } from "../../../../components/ButtonSave";
import { useStyles } from './styles'
import CheckFavorite from './../../../../components/CheckFavorite/index';
import TextField from '@material-ui/core/TextField';
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export const SaveForm = ({ onSumbit, name, desc, date, defaultValue, valueName, valueDesc, valueDate, as, checkedImportant }) => {

    const styles = useStyles()
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
 
           {/*       <FieldTextSimple
                    as={FormControlLabel}
                    control={
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            name="important"
                            checked={checkedImportant}
                        />
                    }
                    label={'Importante'}
                />   */}

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