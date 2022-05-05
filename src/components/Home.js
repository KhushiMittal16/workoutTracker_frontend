import React from 'react'
import '../CSS/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <div className='mainhome'>
        <img src='https://c4.wallpaperflare.com/wallpaper/962/206/477/quote-motivational-think-positively-txt-wallpaper-preview.jpg' alt='home page'/>
        <Link to="/user" className='btn btn-danger' style={{margin:'2vh', paddingLeft:'-1%',paddingRight:'0px',width:'20%', fontFamily:'Tapestry', backgroundColor:'#b51243', fontSize:'150%', borderColor:'black'}}>Lets get started <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className='footer'>
        <div className='footerabout'>
          <h4>About</h4>
          <div className='contactdetails'>
            <Link to='/About' style={{ textDecoration: 'none', color:'white'}}>About us</Link><br/>
            <Link to='/contactUs'  style={{ textDecoration: 'none' , color:'white'}}>Contact</Link>
          </div>
        </div>
        <div className='social'>
          <h4>Social</h4>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className='copyright'>
        Copyright © hik. All Rights Reserved. Tel: +91- XXXXXXX. E-mail: info@exerciseTrack.com
        </div>
    </div>
  )
}

export default Home;