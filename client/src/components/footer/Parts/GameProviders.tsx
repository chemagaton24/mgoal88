import LogoOpusGaming from "../../../assets/images/logos/opus-gaming-blue-pale.svg"
import LogoSabaSports from "../../../assets/images/logos/saba-sports-blue-pale.svg"
import LogoPagmaticPlay from "../../../assets/images/logos/pragmatic-play-blue-pale.svg"
import LogoHabanero from "../../../assets/images/logos/habanero-blue-pale.svg"

const GameProviders = () => {
    return (
        <div className="game-providers">
            <ul className="flex flex-inline flex-wrap flex-jc-c g-col-24 g-row-16">
                <li><img src={LogoOpusGaming} alt="opus gaming logo" /></li>
                <li><img src={LogoSabaSports} alt="saba sports logo" /></li>
                <li><img src={LogoPagmaticPlay} alt="pragmatic play logo" /></li>
                <li><img src={LogoHabanero} alt="habanero logo" /></li>
            </ul>
        </div>
    )
}

export default GameProviders