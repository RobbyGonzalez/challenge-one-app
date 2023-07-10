

const Button = ({ imagePath, link, alt }) => {
    return (
        <div>
            <a href={link}>
                <img src={imagePath} alt={alt}></img>
            </a>
        </div>
    )
}

export default Button