import React from 'react';

function Contact() {
  return (
   <div>
    <div>
      <h2>LinkedIn</h2>
    </div>
    <div>
      <h2>GitHub</h2>
    </div>
    <div>
      <h2>Send me an email!</h2>
      <h6>Sends to jacobleeeugenewilson@gmail.com</h6>
      <form action="https://formsubmit.co/jacobleeeugenewilson@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Portfolio Email!!!"/>
        <input type="hidden" name="_next" value="http://localhost:3000/thankyou"/> {/*update once deployed*/}
        <input type="email" name="email" placeholder="Email Address"/>
        <input type="text" name="message" placeholder="Message" required/>
        <button type="submit">Send</button>
      </form>
    </div>
   </div>
  );
}

export default Contact;
