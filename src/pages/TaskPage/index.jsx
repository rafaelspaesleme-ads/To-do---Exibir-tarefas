import React from "react";
import {TaskContainer} from "../../containers/TaskContainer";
import Typography from "@material-ui/core/Typography";
import { useStyles } from './styles';

export const TaskPage = () => {

    const styles = useStyles();
    return (
        <>
            <Typography className={styles.title} component="h1" variant="h2">
                Tarefas
            </Typography>
            <TaskContainer/>
        </>
    )
}   