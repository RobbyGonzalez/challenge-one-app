import "../css/Certifications.css"

const Certifications = ({ name, description, children }) => {
    return (
        <div className="Certifications">
            {children}
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Certifications