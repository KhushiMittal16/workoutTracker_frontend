import React from 'react'
import '../CSS/about.css'

export const About = () => {
  return (
    <div  className='container'>
        <h1 style={{margin:'6px'}}>ABOUT</h1>
        <div style={{padding:'1em', fontSize:'1.1rem', backgroundColor:'rgba(199, 190, 190, 0.774)', borderRadius:'15px'}}>
          Hello !!! and welcome to our website of Exercise Tracker which keeps tracks of your workouts and exercises. You can add a new user who is willing to perform certain exercise. Our website keeps the track of  exercise performed , duration for which exercise is performed and on which particular day that particular exercise is performed. Registered users can select their name from the drop down menu appearing in username and can view their exercise status and keep track record of exercises. You can anytime edit or delete a particular record from the database if you are willing to do so. It also provides a calendar along with it in which you can add or edit or delete a exercise for a given particular day. The duration of exercise helps the user keeps track of time they've devoted to a particular exercise.<br/>
          This website will also be having some tutorials of the different exercise so that a user can see the right mathod to perform an exercise.
          <br/><br/>
          <div style={{fontWeight:'bold',textAlign:'center'}}>
            Our goal is to make people happy and fit, to offer them the simplest way to track workouts and to communicate with personal trainer.
          </div>
          <br/>
          <div style={{textAlign:'center', fontFamily:'fantasy'}}>
          Stay fit And keep Exercising!!!
          </div>
        </div>
        <h2 style={{marginTop:'20px', fontWeight:'bold'}}>OUR TEAM</h2>
          <div style={{margin: '1%', fontWeight:'500'}}>
            Khushi Mittal<br/>
            Hemanpreet Kaur<br/>
            Ishika
          </div>
    </div>
  )
}
