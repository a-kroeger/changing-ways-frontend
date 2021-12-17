import React, { useState } from 'react'

export default function Question(faq) {

    const [revealed, reveal] = useState(false)

    const toggleClass = () => {
        reveal(!revealed);
    }
    
    return (
        <div onClick={toggleClass} className={`${ revealed ? 'reveal' :null } question card left-border`}>
            <div className="ask dropdown">{faq.faqs.attributes.Question}</div>
            <div className="answer">{faq.faqs.attributes.Answer}</div>
        </div>
    )
}