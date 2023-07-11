import Card from "./Card"
import map from "../assets/be60b4bef50944a54eb655fa128f19f5.png"
import "../css/SectionFive.css"

const SectionFive = () => {
    return (
        <div className="SectionFive">
            <img
                className="three"
                src={map}
                alt="decorative"
            ></img>
            <div className='four'>
                <Card
                    head="The Best World Team"
                    subhead2="Elvo Construction"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem."
                />
            </div>
        </div>
    )
}

export default SectionFive