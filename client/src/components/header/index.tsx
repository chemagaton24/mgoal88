import Parts from "./Parts"
import "./style.css"

const Header = () => {

    return (
        <header className="header color-scheme-light">
            <div className="row row-1">
                <div className="inner-box">
                    <div className="flex flex-jc-b g-col-16">
                        <div className="col col-1">
                            <Parts.MainLogo />
                        </div>
                        <div className="col col-2">
                            <Parts.TopRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-2">
                <div className="inner-box">
                    <div className="flex flex-jc-b g-col-16">
                        <div className="col col-1">
                            <Parts.Navbar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header