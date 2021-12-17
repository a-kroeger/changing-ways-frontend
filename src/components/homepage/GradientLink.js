import React from 'react'
import { Link } from 'react-router-dom';

export default function GradientLink(props) {
    return (
            <div className="gradient">
                <Link to={`/program/${props.program.attributes.Url}/${props.program.id}`}>
                    {props.program.attributes.Title}
                </Link>
            </div>    
    )
}
