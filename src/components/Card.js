// import React from 'react'

//  const Card = () => {
//   return (
//     <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="..."/>
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//     </div>
//   </div>
//   )
// }

// export default Card;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, m: 4, }}>
      <CardMedia
        component="img"
        height="300"
        image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Exercises_You_Can_Do_Right_After_Having_a_Baby_Standing_Marching.gif"
        alt="beginner Workout image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Beginner Exercises
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" >Start Now</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
