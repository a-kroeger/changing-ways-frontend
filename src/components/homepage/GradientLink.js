import React from 'react'
import { Link } from 'react-router-dom';

export default function GradientLink(props) {

    return (
            <div className="gradient">
                <Link to={`/program/${props.program.url}/${props.program.id}`}>
                    {props.program.title}
                </Link>
            </div>    
    )
}
