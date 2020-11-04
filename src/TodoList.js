import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText secondary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            aria-label="Edit"
            onClick={() => {
              deleteTodo(index);
            }}
          >

            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
