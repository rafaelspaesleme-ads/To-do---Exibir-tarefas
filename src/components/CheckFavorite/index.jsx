import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Favorite, FavoriteBorder} from "@material-ui/icons";


export const CheckFavorite = ({name, type = "checkbox", label, register, control}) => {

    return (
        <FormControlLabel
            control={
                <Checkbox
                    name={name}
                    type={type}
                    inputRef={register}
                    control={control}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                />
            }
            label={label}
        />
    );
}

export default CheckFavorite;