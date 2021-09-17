import React from 'react'

export default function Referrals() {
    return (
        <main className="form-layout">
        <div className="form">
            <h1>Program Referrals</h1>
            <div class="card left-border">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ex dolor commodi quia sequi accusamus et explicabo maiores magni, ipsa sunt possimus, dicta numquam consequatur asperiores sed dolore voluptatem nesciunt optio sint aspernatur odit voluptatum vero! Cupiditate reiciendis et quod.</p>
                <a href="">Download Referral Form</a>
            </div>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="file" name="referral-form" id="ReferralForm" />
            <button className="submit" type="submit">Submit</button>
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
