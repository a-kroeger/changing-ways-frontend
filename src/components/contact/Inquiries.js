import React from 'react'

class Inquiries extends React.Component {
    constructor(props) {
      super(props);

      this.state = { 
           sendResponse: '',
           name: '',
           email: '',
           message: '' 
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
        const failureMessage = 'Sorry, it looks like something went wrong. Please try again later, or reach out to director@changing-ways.ca.'

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
            phone: '',
            email: '',
            message: '' 
         })

        this.setState({ notificationIsShowing: true })
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
                message: this.state.message
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
        <div className="form-content" onSubmit={this.handleSubmit}>
        <form id="form">                   
        <h1>General Inquiries</h1>
            <div>
                <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
            </div>
            <div>
                <input type="text" placeholder="Phone Number" name="phone" onChange={this.handleChange} />
            </div>
            <div>
                <input type="email" placeholder="Email Address" name="email" onChange={this.handleChange} />
            </div>
            <div>
                <textarea placeholder="What can we help you with today?" name="message" onChange={this.handleChange} ></textarea>   
            </div>
            <div>{this.state.sendResponse}</div>
            <div>
                <input type="submit" required value="Send Message"></input> 
            </div>
        </form>
        </div>
    </div> 
      );
    }
  }

  export default Inquiries
