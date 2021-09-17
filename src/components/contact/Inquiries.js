import React from 'react'

export default function Inquiries() {
    return (
        <main className="form-layout">
        <div className="form">
            <h1>General Inquiries</h1>
            <div className="form-content">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button className="submit" type="submit">Submit</button>
            </div>
        </div>
        <div className="contact-info">
            <ul>
                <li>contact@changingways.ca</li>
                <li>780-679-5555</li>
                <li>1234 56th Street<br />Camrose, Alberta</li>
            </ul>
        </div>
        </main>
    )
}
