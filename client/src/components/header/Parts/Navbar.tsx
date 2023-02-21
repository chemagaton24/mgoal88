import { NavLink } from "react-router-dom"
import globalConstants from "../../../constants"
import Scroller from "../../../utils/scroller"

const navbar = () => {
    return (
        <nav className="navbar">
            <Scroller direction="x">
                <ul className="flex flex-inline g-col-16">
                    {globalConstants.menu.main.map((item, key) => {
                        return (<li key={key}><NavLink to={item.url} end>{item.text}</NavLink></li>)
                    })}
                </ul>
            </Scroller>
        </nav>
    )
}

export default navbar