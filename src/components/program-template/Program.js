import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import ReactMarkdown from 'react-markdown'
import CalendarWrapper from '../utilities/CalendarWrapper'
import gsap from 'gsap'

export default function Program(props) {

    const [program, setProgram] = useState([])

    useEffect(() => {
        getProgramcontent(props);
        loadingAnimation();
    }, [props.match.params.id])

    function getProgramcontent(props){
        fetch(`https://changing-ways-backend.herokuapp.com/api/programs/${props.match.params.id}?populate=*`)
        .then(response => response.json())
        .then(data => setProgram(data.data))
    }

    function loadingAnimation(){
        gsap.from('.card', { opacity: 0, duration: .7, stagger: .15 })
    }
        
    return (
        <main className="content">
       {program.attributes && <>
           <Helmet>
               <title>{`${program.attributes.Title} | Changing Ways `}</title>
               <meta name="description" content ={program.attributes.Description}></meta>
           </Helmet>
            <div className="container">
                <div className="cards">
                    <div className="left-border card">
                         <h1>{program.attributes.Title}</h1>
                        <p>{program.attributes.Description}</p>
                    </div>
                    {program.attributes.BlockOne && <ReactMarkdown className="card" children={program.attributes.BlockOne} />}
                </div>
                {program.attributes.Resources && <div className="resources">
                    <div className="card">
                        <h3>Resources</h3>
                        <ReactMarkdown children={program.attributes.Resources} />
                    </div>
                </div>}
            </div>
            {program.attributes.calendar_events.data && <div className="card calendar">
                <CalendarWrapper events={program.attributes.calendar_events.data} />
            </div>}
            {program.attributes.BlockTwo && <ReactMarkdown className="card" children={program.attributes.BlockTwo} />}
            {program.attributes.BlockThree && <ReactMarkdown className="card" children={program.attributes.BlockThree} />}
            {program.attributes.BlockFour && <ReactMarkdown className="card" children={program.attributes.BlockFour} />}
            {program.attributes.BlockFive && <ReactMarkdown className="card" children={program.attributes.BlockFive} />}
       </>}
       </main>
    )
}
