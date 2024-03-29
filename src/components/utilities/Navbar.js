import React, { useState } from 'react'
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
                <img src='https://res.cloudinary.com/changing-ways-photo-archive/image/upload/v1660592289/thumbnail_green_logo_blue_arrow_402499b653.png?updated_at=2022-08-15T19:38:11.163Z' alt="Changing Ways" srcSet="" />
            </Link>
            <div className={`${burgIsActive ? 'reveal-links' : null} links`}>
                <div onClick={programLinkToggle} className='programs'>
                    <div className={`${programLinksAreActive ? 'showDropdown' : null} dropdown`}>Programs</div>
                    <div className={`${programLinksAreActive ? 'showDropdown' : null} drop-links`}>
                        {props.programs.filter(program => !program.attributes.Title.includes("About Us")).map(program => (
                            <Link
                                key={program.id}
                                onClick={handleCollapse}
                                to={`/program/${program.attributes.Url}/${program.id}`}>{program.attributes.Title}
                            </Link>
                        ))}
                    </div>

                </div>
                <Link onClick={handleCollapse} to="/program/about/4">About Us</Link>
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