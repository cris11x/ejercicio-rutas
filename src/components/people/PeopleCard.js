import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

export const PeopleCard = ({ people }) => {
  //   const classes = useStyles();
  const { id, name, last_name, img, profession } = people;
  return (
    <Card className="col animate__animated animate__bounceIn">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="300"
          image={img}
          title={`${name} ${last_name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name} {last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {profession}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className="btn btn-outline-primary btn-block" to={`./people/${id}`}>Más...</Link>
      </CardActions>
    </Card>
  );
};
