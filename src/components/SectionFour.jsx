import building1 from "../assets/portfolio/24f25b480b4e49ccb7c463893d04da4d.png"
import building2 from "../assets/portfolio/289d0988df9ccafe391c5a296f327b0e.png"
import building3 from "../assets/portfolio/516d0cf7e883585853018116d942949c.png"
import building4 from "../assets/portfolio/60daec789521593f3dd91cb1bb3d7d60.png"
import building5 from "../assets/portfolio/a6ac58a6e4e6965bce3fda2c36e43e94.png"
import building6 from "../assets/portfolio/dca2e7f841dc5201337d6b80dfffe9f6.png"
import building7 from "../assets/portfolio/dcd4c46d0ca35931cafdc77fd8bb3568.png"
import building8 from "../assets/portfolio/f6999cf8d7fee900e76ee65fd1827c4f.png"
import Title from "./Title"
import "../css/SectionFour.css"

const SectionFour = () => {
    return (
        <div className="SectionFour">
            <div className="title">
                <Title
                    header="Recent Projects"
                    subHead="Portpholio"
                />
            </div>
            <div className="portfolio">
                <img src={building1} alt="building" class="gridImage"></img>
                <img src={building2} alt="building" class="gridImage"></img>
                <img src={building3} alt="building" class="gridImage"></img>
                <img src={building4} alt="building" class="gridImage"></img>
                <img src={building5} alt="building" class="gridImage"></img>
                <img src={building6} alt="building" class="gridImage"></img>
                <img src={building7} alt="building" class="gridImage"></img>
                <img src={building8} alt="building" class="gridImage"></img>
            </div>
        </div>
    )
}

export default SectionFour