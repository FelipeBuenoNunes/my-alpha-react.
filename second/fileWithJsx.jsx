  
import React from "react";
import PhotoBox from "./photobox.jsx.js";
import './home.css'

export const Home = () => {
  return (
      <div id="homepage">
        <img src="/src/assets/BackgroundImage.png" id="backgroundImg" ></img>
        <div id="navbar-home">
          <div id="right-homebar-area">
            <img src="/src/assets/Logo.svg" alt="" id='logo-svg-homebar'/>
            <p>AllPhotos</p>
          </div>
          <div id="left-homebar-area">
            <button id='photosUpload'>+</button>
            <p id='username-navbar'>Username</p>
            <button id='btn-profile'><img src="/src/assets/imgProfile.jpeg" id='imgProfile'/></button>
          </div>
        </div>
        <div id='photos-display'>
        </div>
      </div>
  )
}