import LogoGA from "../../../assets/images/logos/ga-blue-pale.svg"
import LogoItech from "../../../assets/images/logos/itech-blue-pale.svg"

const LicenseProviders = () => {
    return (
        <div className="license-providers">
            <ul className="flex flex-inline g-col-16">
                <li><img src={LogoGA} alt="ga logo" /></li>
                <li><img src={LogoItech} alt="itech logo" /></li>
            </ul>
        </div>
    )
}

export default LicenseProviders