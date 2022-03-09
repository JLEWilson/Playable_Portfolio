import React from 'react';

function Contact() {
  function goToUrl(url){
    window.open(url);
  }

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      
    },
    button: {
      fontSize: "2em",
      border: "1px solid black",
      width: "30vw",
      textAlign: "center",
      margin: "1em auto"
    },
    email: {
      margin: "1em auto",
      textAlign: "center",
    },
    formEmail: {
      width: " 15vw"
    },
    formText: {
      width: " 15vw",
      height: "5em"
    },
    formButton: {
      marginTop: "1em",
      padding: ".5em",
      backgroundColor: "LightGreen"
    },

  }

  return (
   <div style={styles.container}>
    <div
      style={styles.button}
      type='button'
      onClick={() => goToUrl("https://www.linkedin.com/in/jacob-lee-eugene-wilson/")}
      >LinkedIn </div>

    <div
      style={styles.button}
      type='button'
      onClick={() => goToUrl("https://github.com/JLEWilson")}
      >GitHub</div>

    <div style={styles.email}>
      <h2>Send me an email!</h2>
      <h6>Sends to jacobleeeugenewilson@gmail.com</h6>
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
  );
}

export default Contact;
