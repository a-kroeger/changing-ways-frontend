import React, { useEffect, useState } from 'react'
// import Calendar from '@toast-ui/react-calendar'
import CalendarWrapper from '../utilities/CalendarWrapper'

export default function Program(props) {

    const [program, setProgram, calendarEvents, setCalendarEvents] = useState([])

    useEffect(() => {
        getProgramcontent(props);
    }, [])

    // Make API call with URL Parameters
    function getProgramcontent(props){
        fetch(`http://localhost:1337/programs/${props.match.params.id}`)
        .then(response => response.json())
        .then(data => setProgram(data))
    }

    const {
        title,
        description,
        calendar_events,
        resources,
        blockOne,
        blockTwo,
        blockThree,
        blockFour,
        blockFive,
        } = program;
        

    return (
       <main className="content">
            <div className="container">
            <div className="cards">
                <div className="left-border card">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="card">
                    <h3>How to Sign Up</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae fugit libero rerum voluptates. Quisquam aut maxime sunt. Accusantium iusto neque officiis repudiandae assumenda placeat, odit aliquam quam vero esse nobis amet eos perferendis repellat, veritatis reiciendis, voluptatibus harum. Nesciunt?</p>
                    <a href="">Already an Owl Practice Member? Click Here</a>
                </div>
            </div>
            <div className="resources">
                <div className="card">
                    <h3>Resources</h3>
                    <a href="">Example Link</a>
                    <a href="">Example Link</a>
                    <a href="">Example Link</a>
                    <a href="">Example Link</a>
                </div>
            </div>
        </div>
        <div className="card">
                <CalendarWrapper events={calendar_events} />
            </div>
       </main>
    )
}
