import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Spinner from '../utilities/Spinner'
import { Helmet } from "react-helmet"
import axios from 'axios'

export default function Faq() {

    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getFaqs();
    }, []);

    function getFaqs(){
        setLoading(true)
        axios.get('https://changing-ways-backend.herokuapp.com/api/faq-categories?populate=*').then(res => {
            setFaqs(res.data.data)
            setLoading(false)
        })
    }

    if (loading) return <Spinner />

    return (
        <main className="faq">
            <Helmet>
                <title>Frequently Asked Questions</title>
                <meta description="description" content="A comprehensive list of all the most frequently asked questions about what Changing Ways is, who we are sponsored by, how you can sign up for programs, and more."/>
            </Helmet>
        {faqs.length > 2 && <div className="question-categories">
            {faqs.map(faq => (
                <AnchorLink key={faq.id + 1000} offset='100' href={`#${faq.id}`}>{faq.attributes.Category}</AnchorLink>
            ))}
        </div>}
        <div className="questions">
            <h1>Frequently Asked Questions</h1>
            {faqs.map(faq => (
                <div key={`${faq.id}`} id={`${faq.id}`} className="category">
                    <h2>{faq.attributes.Category}</h2>
                    {faq.attributes.faqs.data.map(faqs => (
                        <Question 
                            key={faqs.id}
                            faqs={faqs}
                        />
                    ))}
                </div>
                
            ))}
        </div>
    </main>
    )
}
