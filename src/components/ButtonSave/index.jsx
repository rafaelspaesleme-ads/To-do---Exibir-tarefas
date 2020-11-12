import React from "react";
import Button from "@material-ui/core/Button";

export const ButtonSave = ({type, variant, color, titleButton}) => {
 
    return (
        <>
            <Button type={type} variant={variant} color={color}>
                {titleButton}
            </Button>
        </>
    )
}