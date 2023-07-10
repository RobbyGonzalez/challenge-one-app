import Button from "./Button"
import "../css/Header.css"
import logo from "../assets/header/logo-w.png"
import close from "../assets/header/icon-close.png"
import ButtonGroup from "./ButtonGroup"

const Header = () => {
    return (
        <div className="Header">
            <Button
                imagePath={logo}
                link="https://nicepage.com/"
                alt="logo"
            />
            <ButtonGroup /> {/*This migt need to change*/}
            <Button
                imagePath={close}
                link="https://nicepage.com/st/48832/machinery-parks-for-industrial-website-template"
                alt="close"
            />
        </div>
    )
}

export default Header