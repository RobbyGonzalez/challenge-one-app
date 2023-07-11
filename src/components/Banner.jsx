import "../css/Banner.css"
import DoubleImage from "./DoubleImage"
import banner from "../assets/1940.jpg"

const Banner = () => {
    return (
        <div className="Banner">
            <h1>Business and Industrial Parks</h1>
            <img src={banner} alt="large building" id="bannerImage"></img>
            <DoubleImage />
        </div>
    )
}

export default Banner