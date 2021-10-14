import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from 'gsap'
import { Helmet } from "react-helmet"

export default function Faq() {

    const [faqs, setFaqs] = useState([])

    useEffect(()=>{
        getFaqs();
        loadingAnimation();
    }, []);

    function getFaqs(){
        fetch('https://changing-ways.herokuapp.com/faq-categories')
        .then(response => response.json())
        .then(data => setFaqs(data))
    }

    function loadingAnimation(){
        gsap.from('.question-categories', { duration: .8, left: '-500px' })
        gsap.from('.questions', { duration: 2, opacity: '0' })
    }

    return (
        <main className="faq">
            <Helmet>
                <title>Frequently Asked Questions</title>
                <meta description="description" content="A comprehensive list of all the most frequently asked questions about what Changing Ways is, who we are sponsored by, how you can sign up for programs, and more."/>
            </Helmet>
        {faqs.length > 2 && <div className="question-categories">
            {faqs.map(faq => (
                <AnchorLink key={faq.id + 1000} offset='100' href={`#${faq.id}`}>{faq.category}</AnchorLink>
            ))}
        </div>}
        <div className="questions">
            <h1>Frequently Asked Questions</h1>
            {faqs.map(faq => (
                <div key={`${faq.id}`} id={`${faq.id}`} className="category">
                    <h2>{faq.category}</h2>
                    {faq.faqs.map(faqs => (
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
