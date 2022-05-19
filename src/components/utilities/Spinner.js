import React from 'react'
import loader from '../svg/loader.svg'

export default function Spinner() {
    return (
        <div style={{padding: '10vh 0 70vh 0'}}>
           <img src={loader}
                alt="Loading..."
                style={{position: 'relative', width: '200px', margin: 'auto', display: 'block', top: '300px', zIndex: "10000" }} 
          />  
        </div>
    )
}
