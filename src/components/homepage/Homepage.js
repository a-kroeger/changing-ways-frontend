import React, { useEffect, useState } from 'react'
import { Parallax, Background } from 'react-parallax'
import CalendarWrapper from '../utilities/CalendarWrapper'
import CuratorWidget from '../utilities/CuratorWidget'
import GradientLink from './GradientLink'
import 'tui-calendar/dist/tui-calendar.css'
import BGImage from './background.svg'
import Helmet from 'react-helmet'
import gsap from "gsap"

function Homepage(props) {

    /* Initialize State */
    const [calendarEvents, setCalendarEvents] = useState([])
    const [about, setAbout] = useState([])
    
    /* OnLoad Functions */
    useEffect(()=>{
        getCalendarEvents();
        getAbout()
        loadingAnimation();
    }, []);

    function getCalendarEvents(){
        fetch('http://localhost:1337/calendar-events')
        .then(response => response.json())
        .then(data => setCalendarEvents(data))
    }
    function getAbout(){
        fetch('http://localhost:1337/about')
        .then(response => response.json())
        .then(data => setAbout(data) )
    }

    function loadingAnimation(){
        gsap.from('.react-parallax-background-children', { duration: 4, top:'-300px', ease: 'back' })
        gsap.from('.card h1, .card p, .card', { opacity: 0, duration: .6, delay: 1 })
        gsap.from('.program-links', { opacity: 0, duration: .3, delay: 1 })
    }

    return (
        <Parallax strength={1000}>
         <Background className="custom-bg">
            <div
                style={{
                    height: '150vh',
                    width: '100vw',
                    backgroundImage: `url(${BGImage})`,
                }}
            />
        </Background>
        <Helmet>
            <title>Changing Ways</title>
            <meta name="description" content={about.about}/>
        </Helmet>
        <div className="content">
            <div className="top">
                <div className="program-links">
                    {props.programs.map(program => (
                        <GradientLink 
                            program={program}
                            key={program.id}
                        />
                    ))}
                </div>
                <div className="left-border card">
                    <h1>Changing Ways</h1>
                    <p>{about.about}</p>
                </div>
            </div>
            <div className="card calendar">
                <CalendarWrapper
                    events={calendarEvents}
                />
            </div>
            <CuratorWidget feedId="3170ab9c-d755-40d7-8281-5ce7a99abd58" />
        </div>
        </Parallax>
    )
}

export default Homepage;