import Title from "./Title"
import Certifications from "./Certifications"
import icon from "../assets/Screenshot 2023-07-10 154551.png"
import "../css/SectionTwo.css"

const SectionTwo = () => {
    return (
        <div className="SectionTwo">
            <div className="title">
                <Title
                    header="Company Certifications"
                    subHead="What we do"
                    description="Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project."
                />
            </div>
            <div className="certifications">
                <Certifications
                    name="Healthcare Building"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications>
                <Certifications
                    name="Education Building"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications><Certifications
                    name="Government Building"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications><Certifications
                    name="Commercial Building"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications><Certifications
                    name="Residential Building"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications><Certifications
                    name="Restaurant Facilities"
                    description="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications>
            </div>
        </div>
    )
}

export default SectionTwo