import React from 'react';
import Headshot from "../img/Headshot.jpg"

function About() {
  const styles = {
    container:{
      textAlign: "center"
    },
    photo: {
      borderRadius: "12px",
      width: "20vw",
      margin: "1em 0"
    },
    about: {
      backgroundColor: "rgba(255, 255, 255, .25)",
      color: "rgba(250, 235, 215, .80)",
      fontWeight: "700",
      fontSize: "1.12em",
      border: "2px solid black",
      width: "80%",
      margin: "0 auto",
      padding: ".5em"
    }
  }
  return (
   <div style={styles.container}>
    <img src={Headshot} 
      alt="Jacob Headshot" 
      style={styles.photo}/>
    <div style={styles.about}>
      <p>
        As someone with a lot of patience and without a lot of direction as a teenager I never knew what I wanted to do and I found myself working in a variety of fields after getting my GED. 
        While my work history encompasses several fields, each position gave me valuable perspectives and skills to take into future roles.
        I have come to learn and value hard work, accountability, asking for help when needed, perseverance, tact, managing details as well as the big picture, and being proactive.
      </p>
      <p>
        Throughout my life, I have always found joy in video games, and that passion inspired me to pursue programming. 
        I took a free course for JavaScript online, taught myself some C#, and started making a game in Unity. What I didn't expect to find was just how much enjoyment I would get out of coding. 
        I realized that any job where I could code, creatively solve problems, and continue learning would be a good fit for me! 
      </p>
      <p>
        That is what brought me to Epicodus where I began a formal education in full-stack development. 
        I still have a dream of one day owning my own game development studio, but until I get there I aspire to be the best full-stack developer I can be.
      </p>
      </div>
   </div>
  );
}

export default About;