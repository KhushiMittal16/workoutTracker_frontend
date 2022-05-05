import React from 'react'
// height:'100vh', marginTop:'5vh'
export const ContactUs = () => {
  return (
    <div style={{padding:'4vh',justifyContent:'center',alignItems:'center', fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif', backgroundColor:'rgba(199, 190, 190, 0.774)'}}>
      <h2>Exercise Tracker- Contact details</h2>
      <div style={{marginLeft:'2%'}}>
        <div style={{fontWeight:'bold'}}>
          Banasthali Vidyapeeth
        </div>
        <div>
          Tonk,<br/> Rajasthan,<br/> India, 304022
        </div>
        <div>
          Contact-number: +91-xxxxxxxxxx
        </div>
      </div>
      <hr style={{margin:'2vw'}}/>
      <div  style={{marginLeft:'2%'}}>
        <h3>E-mail</h3>
        <div>exercisetracker@gmail.com</div>
      </div>
    </div>
  )
}
