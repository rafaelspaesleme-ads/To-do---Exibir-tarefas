import React from "react";
import TextField from "@material-ui/core/TextField";
import {Controller} from "react-hook-form";

export const FieldTextSimple = ({placeholder, name, type = "text", register, control}) => {

    return (
        <>
            <Controller
                as={TextField}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={name}
                type={type}
                inputRef={register}
                control={control}
            />
        </>
    )
}

export default FieldTextSimple