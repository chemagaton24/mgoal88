import LogoQuickTransfer from "../../../assets/images/logos/quick-transfer-blue-pale.svg"
import LogoQuickPay from "../../../assets/images/logos/quick-pay-blue-pale.svg"
import LogoP2pcn from "../../../assets/images/logos/p2pcn-blue-pale.svg"

const AvailablePayments = () => {
    return (
        <div className="available-payments">
            <div className="flex flex-inline flex-wrap flex-jc-c g-col-8 mq-767-g-row-8">
                <div className="col col-1">Available Payments:</div>
                <ul className="flex flex-inline g-col-8">
                    <li><img src={LogoQuickTransfer} alt="quick transfer logo" className="logo" /></li>
                    <li><img src={LogoQuickPay} alt="quick pay logo" className="logo" /></li>
                    <li><img src={LogoP2pcn} alt="p2pcn logo" className="logo" /></li>
                </ul>
            </div>
        </div>
    )
}

export default AvailablePayments