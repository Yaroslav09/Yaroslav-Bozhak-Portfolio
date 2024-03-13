import React from 'react';
import HeaderPhoto from "../.././assets/header_photo.png";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className='home-page'>
        <div className='header-text'>
            <p className='fs-1'>Hi, I am <strong>Yaroslav Bozhak</strong></p>
            <h2>Ruby, RoR Software Engineer</h2>
            <p>Software Engineer who writes clean, elegant and efficient code.</p>
        </div>
        <div className='header-photo'>
            <img src={HeaderPhoto}  className = 'img-fluid' alt="" />
        </div>
      </div>
    </div>
    
  );
}

export default Home;