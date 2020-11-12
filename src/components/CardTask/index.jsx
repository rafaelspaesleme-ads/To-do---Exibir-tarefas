import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";

export const CardTask = ({id, name, date, description, actionsButtonCard}) => {
 
    return (
        <Card key={id} className={""}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {`${id}, ${name.toUpperCase()}`}
                </Typography>
                <Typography className={""} color="textSecondary">
                    {date}
                </Typography>
                <Typography variant="body2" component="p">
                    {description.toUpperCase()}
                </Typography>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions>
                {actionsButtonCard}
            </CardActions>
        </Card>
    )
}