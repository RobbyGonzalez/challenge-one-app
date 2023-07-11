import CallToAction from "./CallToAction"
import Certifications from "./Certifications"
import icon from "../assets/Screenshot 2023-07-10 161839.png"
import image from "../assets/backhoe.png"
import "../css/SectionThree.css"


const SectionThree = () => {
    return (
        <div className="SectionThree">
            <div id="one">
                <Certifications
                    name="Healthcare Building"
                    description="Tiling is an effective way to add elegance & style to any bath or kitchen Yellow Hats Remodeling Team specializes in tile installation and works directly with each."
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications>
                <CallToAction />
            </div>
            <div id="two">
                <img src={image} alt="decorative"></img>
            </div>
            <div id="three">
                <Certifications
                    name="Education Building"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications>
                <Certifications
                    name="Government Building"
                >
                    <img src={icon} alt="icon" ></img>
                </Certifications>
            </div>
        </div>
    )
}

export default SectionThree