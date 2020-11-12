import React from "react";
import TextField from "@material-ui/core/TextField";
import {Controller} from "react-hook-form";
 
export const FieldTextSimple = ({placeholder, name, defaultValue, type = "text"}) => {

    return (
        <>
            <Controller
                as={TextField}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={name}
                defaultValue={defaultValue}
                type={type}
            />
        </>
    )
}