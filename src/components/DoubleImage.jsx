import lady from "../assets/003.jpg"
import CallToAction from "./CallToAction"

const DoubleImage = () => {
    return (
        <div>
            <img src={lady} alt="lady"></img>
            <div>
                <p>We have several business and industrial parks with available space for your business</p>
                <CallToAction />
            </div>
        </div>
    )
}

export default DoubleImage