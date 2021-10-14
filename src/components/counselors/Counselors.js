import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import gsap from "gsap"

export default function Counselors() {

    const [counselors, setCounselors] = useState([])

    useEffect(()=>{
        getCounselors();
        loadingAnimation();
    }, [])

    function getCounselors(){
        fetch('https://changing-ways.herokuapp.com/counselors')
        .then(response => response.json())
        .then(data => setCounselors(data))
    }

    function loadingAnimation(){
        gsap.from('.counselors', { opacity: 0, duration: .5, delay: .1})
    }

    return (
       <div className="counselors">
           <Helmet>
               <title>Our Counselors | Changing Ways</title>
               <meta description="description" content="A list of all the counselors and professionals who associate with and support Changing Ways "/>
           </Helmet>
            {counselors.map(counselor => (
                <div key={counselor.id} className="counselor">
                <img alt={counselor.name} src={`${counselor.image[0].url}`} />
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