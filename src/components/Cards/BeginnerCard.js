import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

export default function MediaCardBeginner() {
  return (
    <Card sx={{ maxWidth: 345, m: 4, }}>
      <CardMedia
        component="img"
        height="330"
        image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Exercises_You_Can_Do_Right_After_Having_a_Baby_Standing_Marching.gif"
        alt="beginner Workout image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Beginner level Exercises
        </Typography>
       
      </CardContent>
      <CardActions className='action'>
        <Link to="/beginnervideos" style={{ textDecoration: 'none', color:'white'}}>
          Start
        </Link>
      </CardActions>
    </Card>
  );
}