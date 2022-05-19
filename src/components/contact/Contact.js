import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { Helmet } from "react-helmet"

export default function Contact() {

    useEffect(() => {
       gsap.from('.contact-landing h1', { paddingTop: '200px', duration: 2.4, ease: 'circ' })
       gsap.from('.contact-links', { opacity: 0, duration: 1.2, delay: 1.3 })
    }, [])

    return (
        <main className="contact-landing">
            <Helmet>
                <title>Contact Us | Changing Ways</title>
                <meta description="Get in touch with one of our professionals today."/>
            </Helmet>
            <h1>What can we help you with today?</h1>
        <div className="contact-links">
            <Link to="/inquiries">General Inquiries</Link>
            <Link to="/referrals">Program Referrals</Link>
        </div>
    </main>
    )
}