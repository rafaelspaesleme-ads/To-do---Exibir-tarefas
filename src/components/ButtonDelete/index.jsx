import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const ButtonDelete = ({onClickDelete}) => {

    return (
        <IconButton
            aria-label="Delete"
            onClick={onClickDelete}
        >
            <DeleteIcon/>
        </IconButton>
    )
}