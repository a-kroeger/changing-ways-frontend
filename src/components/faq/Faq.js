import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from 'gsap'

export default function Faq() {

    const [faqs, setFaqs] = useState([])

    useEffect(()=>{
        getFaqs();
        loadingAnimation();
    }, []);

    function getFaqs(){
        fetch('http://localhost:1337/faq-categories')
        .then(response => response.json())
        .then(data => setFaqs(data))
    }

    function loadingAnimation(){
        gsap.from('.question-categories', { duration: .8, left: '-500px' })
        gsap.from('.questions', { duration: 2, opacity: '0' })
    }

    return (
        <main className="faq">
        <div className="question-categories">
            {faqs.map(faq => (
                <AnchorLink offset='100' href={`#${faq.id}`}>{faq.category}</AnchorLink>
            ))}
        </div>
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
