import React from "react";

//Material Ui & styles
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LaunchItems = ({ launch }) => {
  return (
    <>
      <Card  sx={{width: '350px',boxShadow: 3}}>
        <CardMedia component="img" height="200" image={launch.image} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {launch.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {launch.home_port}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default LaunchItems;
