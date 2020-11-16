import React from "react";
import IconButton from "@material-ui/core/IconButton";

export const ButtonAction = ({onClickAction, icon, ariaLabel}) => {
 
    return (
        <IconButton
            aria-label={ariaLabel}
            onClick={onClickAction}
        >
            {icon}
        </IconButton>
    )
}

export default ButtonAction;