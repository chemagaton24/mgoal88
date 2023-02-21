import { NavLink } from "react-router-dom"
import LogoMGoal88 from "../../../assets/images/logos/mgoal88-white.svg"

const MainLogo = () => {
    return (
        <div className="main-logo">
            <NavLink to="/">
                <img src={LogoMGoal88} className="logo" alt="mgoal88 logo" />
            </NavLink>
        </div>
    )
}

export default MainLogo