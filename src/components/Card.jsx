import React from 'react'
import CallToAction from './CallToAction'

const Card = ({ subhead, head, paragraph, subhead2 }) => {
    return (
        <div>
            <h6>{subhead2}</h6>
            <h2>{head}</h2>
            <h6>{subhead}</h6>
            <p>{paragraph}</p>
            <CallToAction />

        </div>
    )
}

export default Card