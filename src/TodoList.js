import React, { useState, useEffect } from "react";
import useInputState from "./useInputState";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Container, listContainer, Global } from "./styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodoList = ({task, index, _, onClickDelete}) => {
  const classes = useStyles();  
 
  return (
    <ListItem key={index} dense button>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
          
             <p> {`${task.id}, ${task.name.toUpperCase()}`}</p>

          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {task.date}
          </Typography>
          <Typography variant="body2" component="p">
            {task.desc.toUpperCase()}
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <IconButton
            aria-label="Delete"
            onClick={onClickDelete}
          >
            <DeleteIcon />
          </IconButton>

          <FavoriteIcon />

          <Checkbox tabIndex={-1} disableRipple />
        </CardActions>
      </Card>
    </ListItem>
  );
};

export default TodoList;
