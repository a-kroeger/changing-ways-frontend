import React from 'react'

class Referrals extends React.Component {
    constructor(props) {
      super(props);

      this.state = { 
            active: false,
            notificationIsShowing: false,
            sendResponse: '',
            name: '',
            email: '',
            address: '',
            phone: '',
            probation_expiry: '',
            program: '',
            agency_representative: '',
            agency_phone: '',
            referral_reason: ''
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleApiResponse(data) {
        const successMessage = 'Thank you for your message. A member of our team will get back to you shortly.'
        const failureMessage = 'Sorry, it looks like something went wrong. Please try again later, or reach out to changing-ways.ca.'

        if (data.success === 'true'){
            this.notification(successMessage)
        } if (data.success === 'false') {
            this.notification(failureMessage)
        }
    }

    notification(message) {
        
        document.getElementById('form').reset();
        this.setState({ 
            name: '',
            email: '',
            address: '',
            phone: '',
            probation_expiry: '',
            program: '',
            agency_representative: '',
            agency_phone: '',
            referral_reason: '',
            sendResponse: ''
         })
        this.setState({ sendResponse : message })
    }
  
    handleSubmit(event) {
        fetch("https://formsubmit.co/ajax/director@changing-ways.ca", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                address: this.state.home_address,
                phone: this.state.phone,
                probation_expires: this.state.probation_expires,
                program_service: this.state.program_service,
                agency_representative: this.state.agency_representative,
                agency_phone: this.state.agency_phone,
                rreason_for_referral: this.state.reason_for_referral
            })
        })
        .then(response => response.json())
        .then(data => this.handleApiResponse(data))
        .catch(error => console.log(error));
        event.preventDefault();
    }

    render() {
      return (
        <div className="form-container">
                 <div className="form-content">
                 <form id="form"  onSubmit={this.handleSubmit}>
                 <h1>Program Referrals</h1>
                     <div className="">
                         <p>Name</p>
                         <input type="text" className="" placeholder="John Doe" name="name" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Email Address</p>
                         <input type="email" className="" placeholder="email@gmail.com" name="email" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Home Address</p>
                         <input type="text" className="" placeholder="1234 56th Street, Camrose AB" name="address" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Phone Number</p>
                         <input type="text" className="" placeholder="+1(780)555-5555" name="phone" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Probation Order Expires</p>
                         <input type="date" className="date-picker"  name="probation_expires" onChange={this.handleChange}/>
                     </div>
                         <p>Program Or Service Needed</p>
                         <input type="radio" name="program_service" id="0" onChange={this.handleChange} value="Choices: Intimate Partner Violence Group for Men" />
                         <label htmlFor="0"> Choices: Intimate Partner Violence Group for Men</label>
                             <br />
                         <input type="radio" name="program_service" id="1" onChange={this.handleChange} value="Choices: Intimate Partner Violence Group for Women"/>
                         <label htmlFor="1"> Choices: Intimate Partner Violence Group for Women</label>
                             <br />
                         <input type="radio" name="program_service" id="2" onChange={this.handleChange} value="Anger Management"/>
                         <label htmlFor="2"> Anger Management</label>
                             <br />
                         <input type="radio" name="program_service" id="3" onChange={this.handleChange} value="Child/youth Counselling"/>
                         <label htmlFor="3"> Child/youth Counselling</label>
                             <br />
                         <input type="radio" name="program_service" id="4" onChange={this.handleChange} value="Short-term Adult Counselling"/>
                         <label htmlFor="4"> Short-term Adult Counselling</label>
                             <br />
                         <input type="radio" name="program_service" id="5" onChange={this.handleChange} value="Elder Abuse"/>
                         <label htmlFor="5"> Elder Abuse</label>
                         <input id="radio-value" type="text" name="program" />
                     <div> 
                     </div>
                     <div className="">
                         <p>Agency Representative</p>
                         <input type="text" className="" placeholder="Your Agency Representative" name="agency_representative" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Agency Phone Number</p>
                         <input type="text" className="" placeholder="+1(780)555-5555" name="agency_phone" onChange={this.handleChange}/>
                     </div>
                     <div className="">
                         <p>Reason For Referral</p>
                         <textarea className="" placeholder="Why are you being referred?" name="reason_for_referral" onChange={this.handleChange}></textarea> 
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
                     <div>{this.state.sendResponse}</div>
                     <div className="">
                         <input type="submit" className="btn btn-info" value="Send Message"></input> 
                     </div>
                 </form>
                 </div>
          </div>    )} 
  }

  export default Referrals
