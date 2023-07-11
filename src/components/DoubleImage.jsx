import lady from "../assets/003.jpg"
import CallToAction from "./CallToAction"
import "../css/DoubleImage.css"

const DoubleImage = () => {
    return (
        <div className="DoubleImage">
            <img src={lady} alt="lady" id="lady"></img>
            <div className="card">
                <p>We have several business and industrial parks with available space for your business</p>
                <CallToAction />
            </div>
        </div>
    )
}

export default DoubleImage