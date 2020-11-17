import React from "react";
import TextField from "@material-ui/core/TextField";
import {Controller} from "react-hook-form";
 
export const FieldTextSimple = ({as,placeholder, name, defaultValue, value, type = "text", onChange, checked}) => {

    return (
        <>
            <Controller
                as={as}
                onChange={onChange}
                checked={as === 'Checkbox' ? checked : undefined}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={name}
                defaultValue={defaultValue}
                type={type}
                value={value}
                
            />
        </>
    )
}

export default FieldTextSimple