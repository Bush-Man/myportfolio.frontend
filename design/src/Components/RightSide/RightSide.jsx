import './RightSide.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const RightSide = () => {
  
  
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_inj6wyw', 'template_cixvi1u', form.current, '-O6AZ16-RSStjkp4i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
      <div className="rightSide">
      <div style={{marginBottom:"0.75rem"}}>
        <h3 >Contact Me</h3>
      <hr style={{width:80}}/>
      </div>
          <form ref={form} onSubmit={sendEmail} >
              <div style={{display:"flex", flexDirection:"column"}}>
                <label>Names</label>
              <input  name="user_name" type="text" required  />
              </div>
              <div style={{display:"flex", flexDirection:"column"}}>
                     <label>Phone No</label>
              <input  name="phone" type="text"  />
           </div>
              <div  style={{display:"flex", flexDirection:"column"}}>
                     <label>Email</label>
              <input  name="user_email"type="email" required  />
              </div>
              <div style={{display:"flex", flexDirection:"column"}}>
              <label>Message</label>
              <textarea   name="message" type="text" style={{maxWidth:"90%", minWidth:"90%", maxHeight:"10rem",minHeight:"10rem",marginBottom:"5px",outline:"none",padding:"5px"}}/>
              </div>
              <button className="rightButton" type="submit">Send Message</button>
          </form>
        </div>
  )
}

export default RightSide