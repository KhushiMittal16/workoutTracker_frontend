import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

export default function MediaCardIntermediate() {
  return (
    <Card sx={{ maxWidth: 345, m: 4, }}>
      <CardMedia
        component="img"
        height="300"
        image="https://thumbs.gfycat.com/AdolescentDirtyAngelwingmussel-max-1mb.gif"
        alt="beginner Workout image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Intermediate level Exercises
        </Typography>
       
      </CardContent>
      <CardActions className='action'>
        <Link to="/intermediatevideos">
          start
        </Link>
      </CardActions>
    </Card>
  );
}