import React, { useEffect, useState } from 'react'
import gsap from "gsap"

export default function Counselors() {

    const [counselors, setCounselors] = useState([])

    useEffect(()=>{
        getCounselors();
        loadingAnimation();
    }, [])

    function getCounselors(){
        fetch('http://localhost:1337/counselors')
        .then(response => response.json())
        .then(data => setCounselors(data))
    }

    function loadingAnimation(){
        gsap.from('.counselors', { opacity: 0, duration: .5, delay: .1})
    }

    return (
       <div className="counselors">
            {counselors.map(counselor => (
                <div key={counselor.id} className="counselor">
                <img alt={counselor.name} src={`http://localhost:1337${counselor.image[0].url}`} />
                <div className="id">
                    <h3>{counselor.name}</h3>
                    <h4>{counselor.title}</h4>
                </div>
                <p>{counselor.biography}</p>
            </div>
            ))}
       </div>
    )
}