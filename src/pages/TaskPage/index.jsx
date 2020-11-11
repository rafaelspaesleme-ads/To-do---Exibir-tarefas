import React from "react";
import {TaskContainer} from "../../containers/TaskContainer";
import Typography from "@material-ui/core/Typography";

export const TaskPage = () => {

    return (
        <>
            <Typography component="h1" variant="h2">
                Tarefas
            </Typography>
            <TaskContainer/>
        </>
    )
}