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
        fetch(`https://changing-ways.herokuapp.com/programs/${props.match.params.id}`)
        .then(response => response.json())
        .then(data => setProgram(data))
    }

    function loadingAnimation(){
        gsap.from('.card', { opacity: 0, duration: .7, stagger: .15 })
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
           <Helmet>
               <title>{`${title} | Changing Ways `}</title>
               <meta name="description" content ={description}></meta>
           </Helmet>
            <div className="container">
                <div className="cards">
                    <div className="left-border card">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    {blockOne && <ReactMarkdown className="card" children={blockOne} />}
                    {/* <div className="card">
                        <h3>How to Sign Up</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae fugit libero rerum voluptates. Quisquam aut maxime sunt. Accusantium iusto neque officiis repudiandae assumenda placeat, odit aliquam quam vero esse nobis amet eos perferendis repellat, veritatis reiciendis, voluptatibus harum. Nesciunt?</p>
                    </div> */}
                </div>
                {resources && <div className="resources">
                    <div className="card">
                        <h3>Resources</h3>
                        <ReactMarkdown children={resources} />
                    </div>
                </div>}
            </div>
            <div className="card calendar">
                <CalendarWrapper events={calendar_events} />
            </div>
            {/* {blockOne && <ReactMarkdown className="card" children={blockOne} />} */}
            {blockTwo && <ReactMarkdown className="card" children={blockTwo} />}
            {blockThree && <ReactMarkdown className="card" children={blockThree} />}
            {blockFour && <ReactMarkdown className="card" children={blockFour} />}
            {blockFive && <ReactMarkdown className="card" children={blockFive} />}
       </main>
    )
}
