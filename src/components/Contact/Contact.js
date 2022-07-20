import React from "react";
import phone from "../../assets/images/Phone.png";
import email from "../../assets/images/EmailLogo.png";
import linkedIn from "../../assets/images/LinkedIn.png";
import gitHub from "../../assets/images/GitHub.png";
import resume from "../../assets/images/MyResume.png";


function Contact() {

  return (
    <address id="contact">
      <div className="contacts">
        <h1>Contact Me</h1>
      </div>
      <div className="filler">
          <img src={phone} alt="Call or text Kate at 6143156951" />
          <a href="mailto: katensullivan55@gmail.com"><img src={email} alt="Email Kate at katensullivan55@gmail.com" /></a>
          <a href="https://www.linkedin.com/in/kate-sullivan-37ab12225/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="Go to Kate's LinkedIn Profile" /></a>
          <a href="https://github.com/katensullivan55" target="_blank" rel="noreferrer"><img src={gitHub} alt="Go to Kate's GitHub profile" /></a>
          <a href="https://drive.google.com/file/d/1Q7GFZmRId8z_83jE_V0rh_unw1v2V64e/view?usp=sharing" target="_blank" rel="noreferrer"><img src={resume} alt="Go to Kate's resume" /></a>
      </div>
    </address>
  );
}

export default Contact;