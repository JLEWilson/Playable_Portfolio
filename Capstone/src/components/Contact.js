import React from 'react';

function Contact() {
  return (
   <div>
    <div>
      <h2>LinkedIn</h2>
    </div>
    <div>
      <h2>LinkedIn</h2>
    </div>
    <form action="https://formsubmit.co/jacobleeeugenewilson@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="Portfolio Email!!!"/>
      <input type="email" name="email" placeholder="Email Address"/>
      <input type="text" name="message" placeholder="Message" required/>
      <button type="submit">Send</button>
    </form>
   </div>
  );
}

export default Contact;
