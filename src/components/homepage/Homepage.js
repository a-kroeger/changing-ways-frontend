import React, { useEffect, useState } from 'react'
import { Parallax, Background } from 'react-parallax'
import CuratorWidget from '../utilities/CuratorWidget'
import GradientLink from './GradientLink'
import MailchimpFormContainer from '../utilities/MailchimpFormContainer'
import 'tui-calendar/dist/tui-calendar.css'
import Spinner from '../utilities/Spinner'
import Helmet from 'react-helmet'
import axios from 'axios'

function Homepage(props) {

    /* Initialize State */
    const [about, setAbout] = useState([])
    const [loading, setLoading] = useState(true)
    
    /* OnLoad Functions */
    useEffect(()=>{
        getAbout()
    }, []);

    function getAbout(){
        axios.get('https://changing-ways-backend.herokuapp.com/api/about').then(res => {
            setAbout(res.data.data.attributes)
            setLoading(false)
        })
    }

    if (loading) return <Spinner />

    return (
        <Parallax strength={1600}>
         <Background className="custom-bg">
            <div
                style={{
                    height: '85vh',
                    width: '100vw',
                    background: 'linear-gradient(317deg, rgba(50,154,214,0.8849144067657128) 0%, rgba(151,88,163,0.9663750809230161) 100%)'
                }}
            />
        </Background>
        <Helmet>
            <title>Changing Ways</title>
            <meta name="description" content={about.About}/>
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
                    <p>{about.About}</p>
                </div>
            </div>
            <CuratorWidget feedId="3170ab9c-d755-40d7-8281-5ce7a99abd58" />
            <MailchimpFormContainer />
        </div>
        </Parallax>
    )
}

export default Homepage;