import React, { useState } from 'react'
import emailjs from 'emailjs-com'

     export default function ContactUs(){ 

        const [selectedButtonValue, setSelectedButton] = useState('')

        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_5dufgds', 'template_s5x3atp', e.target, 'user_AAjyozah1gauhvUEt2eRO')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              })
              e.target.reset()
            }
        
            function handleInputChange(event) {
                const hiddenField = document.getElementById('radio-value')
                hiddenField.value = event.target.value
                setSelectedButton(event.target.value);
            }
        

        return(
            <div className="form-container">
                <div className="form-content">
                <form onSubmit={sendEmail}>
                <h1>Program Referrals</h1>
                    <div className="">
                        <p>Name</p>
                        <input type="text" className="" placeholder="John Doe" name="name"/>
                    </div>
                    <div className="">
                        <p>Email Address</p>
                        <input type="email" className="" placeholder="email@gmail.com" name="email"/>
                    </div>
                    <div className="">
                        <p>Home Address</p>
                        <input type="text" className="" placeholder="1234 56th Street, Camrose AB" name="home_address"/>
                    </div>
                    <div className="">
                        <p>Phone Number</p>
                        <input type="text" className="" placeholder="+1(780)555-5555" name="phone"/>
                    </div>
                    <div className="">
                        <p>Probation Order Expires</p>
                        <input type="date" className=""  name="probation_expires"/>
                    </div>
                    <div className="programs">
                        <p>Program Or Service Needed</p>
                        <input type="radio" name="program_service" id="0" onChange={handleInputChange} value="Choices: Intimate Partner Violence Group for Men" />
                        <label htmlFor="0"> Choices: Intimate Partner Violence Group for Men</label>
                            <br />
                        <input type="radio" name="program_service" id="1" onChange={handleInputChange} value="Choices: Intimate Partner Violence Group for Women"/>
                        <label htmlFor="1"> Choices: Intimate Partner Violence Group for Women</label>
                            <br />
                        <input type="radio" name="program_service" id="2" onChange={handleInputChange} value="Anger Management"/>
                        <label htmlFor="2"> Anger Management</label>
                            <br />
                        <input type="radio" name="program_service" id="3" onChange={handleInputChange} value="Child/youth Counselling"/>
                        <label htmlFor="3"> Child/youth Counselling</label>
                            <br />
                        <input type="radio" name="program_service" id="4" onChange={handleInputChange} value="Short-term Adult Counselling"/>
                        <label htmlFor="4"> Short-term Adult Counselling</label>
                            <br />
                        <input type="radio" name="program_service" id="5" onChange={handleInputChange} value="Elder Abuse"/>
                        <label htmlFor="5"> Elder Abuse</label>
                        <input id="radio-value" type="text" name="program" />
                    </div>
                    <div> 
                    </div>
                    <div className="">
                        <p>Agency Representative</p>
                        <input type="text" className="" placeholder="Your Agency Representative" name="agency_representative"/>
                    </div>
                    <div className="">
                        <p>Agency Phone Number</p>
                        <input type="text" className="" placeholder="+1(780)555-5555" name="agency_phone"/>
                    </div>
                    <div className="">
                        <p>Reason For Referral</p>
                        <textarea className="" placeholder="Why are you being referred?" name="reason_for_referral"></textarea> 
                    </div>
                    <div className="card">
                        <h3>Release of Information</h3>
                        <p>I hereby give my consent to release the information above to Changing Ways. I understand that the information will be kept confidential and used only as necessary with respect to my participation in the Changing Ways Program. I also give permission to Changing Ways to communicate with the referring agency to confirm whether or not I have:</p>
                        <ul>
                            <li>contacted Changing Ways to register for the program to which I am/we are referred;</li>
                            <li>registered for the program / service indicated above;</li>
                            <li>been attending and participating, or being referred by Changing Ways to a more appropriate program.</li>
                        </ul>
                        <div className="release">
                            <input required type="checkbox" name="release_agreement" id="release" />
                            <label htmlFor="release"> I consent</label>
                        </div>
                    </div>
                    <div className="">
                        <input type="submit" className="btn btn-info" value="Send Message"></input> 
                    </div>
                </form>
                </div>
            </div> )
        
            }