import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { IconButton } from "@material-ui/core";
function Footer() {
  const redirectToUrl = (url) => {
    window.location.href = url;
  }
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton aria-label="instagram" onClick={() => redirectToUrl('https://www.instagram.com/mithun._.m/?next=%2F')}> <InstagramIcon />  </IconButton>
        <IconButton aria-label="twitter" onClick={() => redirectToUrl('https://twitter.com/MithunM2003?t=MjNiuMpEdAd9HAHpTqB3Mw&s=09')}><TwitterIcon /></IconButton>
        <IconButton aria-label="linkedin" onClick={() => redirectToUrl('https://www.linkedin.com/in/mithun-m-29b49921b/')}><LinkedInIcon /></IconButton>
      </div>
      <p> &copy;  all rights reserved @Mithun</p>
    </div>
  );
}

export default Footer;
