import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const [burgIsActive, setBurg] = useState(false)
    const [programLinksAreActive, setProgramLinks] = useState(false)

    function navControl(){
        setBurg(!burgIsActive)
    }

    function handleCollapse() {
        if (burgIsActive === true){
            setBurg(!burgIsActive)
            setProgramLinks(false)
        }
    }

    function programLinkToggle() {
        setProgramLinks(!programLinksAreActive)
    }

    return (
        <nav className={burgIsActive ? 'full-length' : null}>
            <Link onClick={handleCollapse} to="/" className="logo">
                <img src={logo} alt="Family Violence Action Society" srcSet="" />
            </Link>
            <div className={`${burgIsActive ? 'reveal-links' : null} links`}>
                <div onClick={programLinkToggle} className='programs'>
                    <div className={`${programLinksAreActive ? 'showDropdown' : null} dropdown`}>Programs</div>
                    <div className={`${programLinksAreActive ? 'showDropdown' : null} drop-links`}>
                        {props.programs.map(program => (
                            <Link
                                key={program.id}
                                onClick={handleCollapse}
                                to={`/program/${program.url}/${program.id}`}>{program.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <Link onClick={handleCollapse} to="/counselors">Our Counselors</Link>
                <Link onClick={handleCollapse} to="/faq">FAQ</Link>
                <Link onClick={handleCollapse} to="/contact">Contact Us</Link>
            </div>
            <div onClick={navControl} className={`${burgIsActive ? 'reveal' : null} hamburger-menu`}>
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
        </nav>
    )
}