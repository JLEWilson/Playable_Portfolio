import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

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
      color: "rgba(235, 250, 215, .6)",
      borderRadius: "12px",
      padding: ".5em 0",
      backgroundColor: "rgba(42,86,51,.5)",
      margin: "1em auto"
    },
    email: {
      margin: "1em auto",
      textAlign: "center",
    },
    formEmail: {
      width: " 35vw",
      marginTop: "2em",
      backgroundColor: "rgba(250, 235, 215, .80)",
    },
    formText: {
      width: " 35vw",
      height: "5em",
      backgroundColor: "rgba(250, 235, 215, .80)",
    },
    formButton: {
      marginTop: "1em",
      padding: ".5em",
      border: "none",
      backgroundColor: "rgb(41,58,44)",
			color: "rgba(235, 250, 215, .7)",
    },
    emailMe: {
      marginBottom: "0",
      color: "rgba(250, 235, 215, .80)",
    },
    emailAddress: {
      marginTop: ".2em",
      color: "rgba(250, 235, 215, .80)",
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
        <input type="hidden" name="_next" value="https://jlewilson.github.io/Playable_Portfolio/thankyou"/>
        <input  style={styles.formEmail} type="email" name="email" placeholder="Email Address"/>
        <br/>
        <input style={styles.formText} type="text" name="message" placeholder="Message" required/>
        <br/>
        <button style={styles.formButton} type="submit">Send</button>
      </form>
    </div>
   </div>
  );
}

export default Contact;
