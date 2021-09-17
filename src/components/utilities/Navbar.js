import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="logo">
                <img src={logo} alt="Family Violence Action Society" srcSet="" />
            </Link>
            <div className="links">
                <div className="dropdown">
                    Programs
                    <a href="">Domestic Violence</a>
                    <a href="">Anger Management</a>
                    <a href="">Youth Counseling</a>
                    <a href="">Adult Counseling</a>
                    <a href="">Elder Abuse</a>
                </div>
                <Link to="/counselors">Our Counselors</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    )
}