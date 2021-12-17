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
        fetch('https://changing-ways-backend.herokuapp.com/api/counselors?populate=*')
        .then(response => response.json())
        .then(data => setCounselors(data.data))
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
                <img alt={counselor.attributes.Name} src={`${counselor.attributes.Image.data.attributes.url}`} />
                <div className="id">
                    <h3>{counselor.attributes.Name}</h3>
                    <h4>{counselor.attributes.Title}</h4>
                </div>
                <p>{counselor.attributes.Biography}</p>
            </div>
            ))}
       </div>
    )
}