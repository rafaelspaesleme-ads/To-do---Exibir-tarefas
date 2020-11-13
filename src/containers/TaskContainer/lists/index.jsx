import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { CardTask } from "../../../components/CardTask";

export const ListTask = ({ id, name, date, description, actionsButtonItem }) => {

    return (

        <ListItem dense button>
            <CardTask
                id={id}
                name={name}
                date={date}
                description={description}
                actionsButtonCard={actionsButtonItem}
            />
        </ListItem>
    )
}

export default ListTask