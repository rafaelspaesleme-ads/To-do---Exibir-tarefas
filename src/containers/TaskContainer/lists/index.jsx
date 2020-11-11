import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {CardTask} from "../../../components/CardTask";

export const ListTask = ({key, name, date, description, actionsButtonItem}) => {

    return (
        <ListItem key={key} dense button>
            <CardTask
                id={key}
                name={name}
                date={date}
                description={description}
                actionsButtonCard={actionsButtonItem}
            />
        </ListItem>
    )
}