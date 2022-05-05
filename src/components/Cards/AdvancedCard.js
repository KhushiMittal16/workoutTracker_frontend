import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../../CSS/card.css';

export default function MediaCardAdvanced() {
  return (
    <Card sx={{ maxWidth: 345, m: 4, }}>
      <CardMedia
        component="img"
        height="300"
        image="https://thumbs.gfycat.com/BrightCriminalHippopotamus-size_restricted.gif"
        alt="beginner Workout image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Advanced level Exercises
        </Typography>
       
      </CardContent>
      <CardActions className='action'>
        <Link to="/advancedvideos" style={{ textDecoration: 'none', color:'white'}}>
          Start
        </Link> 
      </CardActions>
    </Card>
  );
}