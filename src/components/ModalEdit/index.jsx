
import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



export const ModalEdit = ({ content, title, titleCancelButton, open, titleActionButton }) => {

    const [_, setOpen] = useState(false);



    const handleClose = () => {
        setOpen(false);
    };


    return (

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Tarefa # 525</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {title}

                </DialogContentText>

                {content}


            </DialogContent>
            <DialogActions>

                <Button onClick={handleClose} color="primary">
                    {titleCancelButton}
                </Button>
                <Button onClick={handleClose} color="primary">
                    {titleActionButton}
                </Button>


            </DialogActions>
        </Dialog>
    )
}

export default ModalEdit