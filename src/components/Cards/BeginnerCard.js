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
        height="300"
        image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Exercises_You_Can_Do_Right_After_Having_a_Baby_Standing_Marching.gif"
        alt="beginner Workout image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Beginner Exercises
        </Typography>
       
      </CardContent>
      <CardActions className='action'>
        <Link to="/beginnervideos">
          start
        </Link>
      </CardActions>
    </Card>
  );
}