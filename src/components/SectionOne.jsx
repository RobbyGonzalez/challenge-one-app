import React from 'react'
import Card from "./Card"
import trainImage from "../assets/pexelsphoto2884590.jpeg"
import "../css/SectionOne.css"

const SectionOne = () => {
    return (
        <div className='SectionOne'>
            <div className='one'>
                <Card
                    head="Construction Machinery Co."
                    subhead="We has a proud tradition of service as a General Contractor since 1974"
                    paragraph="We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget.  Our company has served clients and building owners for over four decades."
                />
            </div>
            <img
                className="two"
                src={trainImage}
                alt="decorative"
            ></img>
        </div>
    )
}

export default SectionOne