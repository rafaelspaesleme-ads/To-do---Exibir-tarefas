import React from "react";
import Button from "@material-ui/core/Button";

export const ButtonSave = ({ type, variant, color, titleButton, className = null }) => {

    return (
        <>
            <Button className={className} type={type} variant={variant} color={color}>
                {titleButton}
            </Button>
        </>
    )
}

export default ButtonSave;