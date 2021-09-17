import React, { useState } from 'react'

export default function Question(faq) {

    const [revealed, reveal] = useState(false)

    const toggleClass = () => {
        reveal(!revealed);
    }
    
    return (
        <div onClick={toggleClass} className={`${ revealed ? 'reveal' :null } question card left-border`}>
            <div className="ask dropdown">{faq.faqs.question}</div>
            <div className="answer">{faq.faqs.answer}</div>
        </div>
    )
}