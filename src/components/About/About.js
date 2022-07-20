import React from "react";
import photo from "../../assets/images/portraite.png"

function About() {


  return (
    <article id="about-me">
      <div className="abtitle">
          <h1>About Me</h1>
      </div>
      <div className="abcontent">
          <img src={photo} alt="Kate Sullivan" />
          <p>
            Coding is new to me, but I'm excited to learn and grow more in the field!
          <br></br>
          <br></br>
            I've worked administrative jobs previously that have allowed me to work on different projects and test different skills I'd like to develop. This led me to looking fo a field where I can be constantly learning and developing more skills. Coding is constant learning and being flexible to do more, and that's what I am good at.
          </p>  
      </div>  
    </article>
  );
}

export default About;