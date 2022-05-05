import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import '../../CSS/card.css'

export default function MediaCardIntermediate() {
  return (
    <Card sx={{ maxWidth: 345, m: 4, }}>
      <CardMedia
        component="img"
        height="300"
        image="https://i0.wp.com/thumbs.gfycat.com/DeliriousJaggedGoldfish-size_restricted.gif?h=840"
        alt="beginner Workout image" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Intermediate level Exercises
        </Typography>
       
      </CardContent>
      <CardActions className='action'>
        <Link to="/intermediatevideos" style={{ textDecoration: 'none', color:'white'}}>
          Start
        </Link>
      </CardActions>
    </Card>
  );
}