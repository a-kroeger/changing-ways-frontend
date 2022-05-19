import React from 'react'
import emailjs from 'emailjs-com'

     export default function ContactUs(){ 

       function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_5dufgds', 'template_flm8o8e', e.target, 'user_AAjyozah1gauhvUEt2eRO')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              })
              e.target.reset()
            }
          

        return(
            <div className="form-container">
                <div className="form-content">
                <form onSubmit={sendEmail}>                   
                <h1>General Inquiries</h1>
                    <div>
                        <input type="text" placeholder="Name" name="from_name"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number" name="phone"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address" name="email"/>
                    </div>
                    <div>
                        <textarea placeholder="What can we help you with today?" name="message"></textarea>   
                    </div>
                    <div>
                        <input type="submit" required value="Send Message"></input> 
                    </div>
                </form>
                </div>
            </div> 
        )}