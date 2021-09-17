import React, { useEffect, useState } from 'react'
import { Parallax, Background } from 'react-parallax'
import CalendarWrapper from '../utilities/CalendarWrapper'
import CuratorWidget from '../utilities/CuratorWidget'
import GradientLink from './GradientLink'
import 'tui-calendar/dist/tui-calendar.css'
import BGImage from './background.svg'
import gsap from "gsap"

function Homepage() {

    /* Initialize State */
    const [calendarEvents, setCalendarEvents] = useState([])
    const [programs, setPrograms] = useState([])
    
    /* OnLoad Functions */
    useEffect(()=>{
        getPrograms();
        getCalendarEvents();
        loadingAnimation();
    }, []);

    function getPrograms(){
        fetch('http://localhost:1337/programs')
        .then(response => response.json())
        .then(data => setPrograms(data))
    }

    function getCalendarEvents(){
        fetch('http://localhost:1337/calendar-events')
        .then(response => response.json())
        .then(data => setCalendarEvents(data))
    }

    function loadingAnimation(){
        gsap.from('.react-parallax-background-children', { duration: 4, top:'-300px', ease: 'back' })
        gsap.from('.card', { height: '500px', duration: 1, delay: .35 })
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
        <div className="content">
            <div className="top">
                <div className="program-links">
                    {programs.map(program => (
                        <GradientLink 
                            program={program}
                            key={program.id}
                        />
                    ))}
                </div>
                <div className="left-border card">
                    <h1>Changing Ways</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste, corporis quae dolore dolores itaque amet, debitis neque modi vero omnis nihil? Doloremque aspernatur modi aliquam minus velit molestiae expedita quasi harum et rem consequuntur ex recusandae, doloribus, architecto nemo.</p>
                </div>
            </div>
            <div className="card">
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