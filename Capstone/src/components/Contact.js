import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
function Contact() {

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      
    },
    link: {
      fontSize: "2em",
      border: "1px solid black",
      width: "30vw",
      textAlign: "center",
      textDecoration:"none",
      color: "black",
      backgroundColor: "#84ca94",
      margin: "1em auto"
    },
    email: {
      margin: "1em auto",
      textAlign: "center",
    },
    formEmail: {
      width: " 35vw",
      marginTop: "2em"
    },
    formText: {
      width: " 35vw",
      height: "5em"
    },
    formButton: {
      marginTop: "1em",
      padding: ".5em",
      backgroundColor: "LightGreen"
    },
    emailMe: {
      marginBottom: "0"
    },
    emailAddress: {
      marginTop: ".2em"
    }

  }

  return (
   <div style={styles.container}>

    <Link to={{ pathname: "https://www.linkedin.com/in/jacob-lee-eugene-wilson/" }} 
          style={styles.link}
          target="_blank" 
          >LinkedIn</Link>
    <Link to={{ pathname: "https://github.com/JLEWilson" }} 
          style={styles.link}
          target="_blank" 
          >Github</Link>

    <div style={styles.email}>
      <h2 style={styles.emailMe}>Send me an email!</h2>
      <h5 style={styles.emailAddress}>Sends to jacobleeeugenewilson@gmail.com</h5>
      <form action="https://formsubmit.co/jacobleeeugenewilson@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Portfolio Email!!!"/>
        <input type="hidden" name="_next" value="http://localhost:3000/thankyou"/> {/*update once deployed*/}
        <input  style={styles.formEmail} type="email" name="email" placeholder="Email Address"/>
        <br/>
        <input style={styles.formText} type="text" name="message" placeholder="Message" required/>
        <br/>
        <button style={styles.formButton} type="submit">Send</button>
      </form>
    </div>
   </div>
=======
function About() {
  return (
   <React.Fragment>
     {/*
     Email, LinkedIn, Github 
     Stretch: Email form
     */}
   </React.Fragment>
>>>>>>> 2a769ae510c3247ebbf5977231f5c6381e2b671a
  );
}

export default Contact;
