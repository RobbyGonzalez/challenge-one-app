import "../css/Title.css"

const Title = ({ header, subHead, description }) => {
    return (
        <div className="Title">
            <h6>{subHead}</h6>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Title