import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { IconButton } from '@material-ui/core';
import Button1 from "./Button";
import Myimg from "../assets/Mithun.jpeg"


function Home() {
  const redirectToUrl = (url) => {
    window.location.href = url;
  }
  
  return (
    <div className="home">
      <div className="about">
        <div className="photo-container">
          <img className="profile-photo" src={Myimg} alt="Profile" />
        </div>

        <h2 className="animate"> Hi, This is Mithun</h2>
        <div className="prompt">
          <p>Web Developer</p>
          <IconButton aria-label="linkedin" onClick={() => redirectToUrl('https://www.linkedin.com/in/mithun-m-29b49921b/')}><LinkedInIcon /></IconButton>
          {/* <IconButton aria-label="mail"><EmailIcon /></IconButton> */}
          <IconButton aria-label="github" onClick={() => redirectToUrl('https://github.com/Mithun120')}><GithubIcon /></IconButton>
          <Button1/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS , Html , Css , Learning NextJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS , ExpressJS , MongoDB , Learning Graph QL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> Java, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
