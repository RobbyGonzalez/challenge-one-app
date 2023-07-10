import Button from "./Button"
import desktop from "../assets/header/responsive-desktop.png"
import laptop from "../assets/header/responsive-laptop.png"
import tablet from "../assets/header/responsive-tablet.png"
import phoneHorizontal from "../assets/header/responsive-phone-horizontal.png"
import phone from "../assets/header/responsive-phone.png"
import "../css/ButtonGroup.css"


const ButtonGroup = () => {
    return (
        <div className="ButtonGroup">
            <Button
                imagePath={desktop}
                className=""
                alt="desktop"
            />
            <Button
                imagePath={laptop}
                className=""
                alt="laptop"
            />
            <Button
                imagePath={tablet}
                className=""
                alt="tablet"
            />
            <Button
                imagePath={phoneHorizontal}
                className=""
                alt="phoneHorizontal"
            />
            <Button
                imagePath={phone}
                className=""
                alt="phone"
            />
        </div>
    )
}

export default ButtonGroup