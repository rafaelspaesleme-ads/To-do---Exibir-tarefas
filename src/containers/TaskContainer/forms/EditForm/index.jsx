import React from 'react'
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';


const EditForm = (name,as, defaultValueName, defaultValueDesc, defaultValueDate, desc, date, placeholder, type) => {
const {control} = useForm()
    return (
        <>
            <Controller
                as={as}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={name}
                defaultValue={defaultValueName}
                type={type}
                control={control}
                
            />
            <Controller
                as={as}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={desc}
                defaultValue={defaultValueDesc}
                type={type}
                
            />
           <Controller
                as={as}
                variant="outlined"
                placeholder={placeholder}
                margin="normal"
                name={date}
                defaultValue={defaultValueDate}
                type={type}
                
            />

        </>

    )

}

export default EditForm;