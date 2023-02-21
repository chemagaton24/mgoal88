import Parts from './Parts'
import './style.css'

const Footer = () => {
    return (
        <footer className="footer mq-767-ta-center">
            <div className="row row-1">
                <div className="inner-box">
                    <div className="row m-b-24 flex flex-wrap flex-jc-b g-col-16 mq-1023-g-row-4 mq-1023-m-b-20 mq-767-flex-jc-c mq-767-g-row-16 mq-767-m-b-24">
                        <div className="col col-1">
                            <Parts.AvailablePayments />
                        </div>
                        <div className="col col-2">
                            <Parts.Navbar />
                        </div>
                    </div>
                    <div className="row">
                        <Parts.GameProviders />
                    </div>
                </div>
            </div>
            <div className="row row-2">
                <div className="inner-box">
                    <div className="flex flex-wrap flex-jc-b g-col-16 g-row-8 mq-767-flex-jc-c">
                        <div className="col col-1">
                            <Parts.LicenseProviders />
                        </div>
                        <div className="col col-2">
                            <Parts.Copyright />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer