import { Button } from '../../../button'
import Container from '../../../containers'
import SectionHeading from '../../../section-heading'
import LogoMGoal88 from "../../../../assets/images/logos/m-sports-dark.svg"
import Modules from '../../modules'
import { useMediaQuery } from '../../../../utils/useMediaQuery'
import './style.css'

const PoweredBy = () => {
    return (
        <div className="powered-by flex flex-inline flex-jc-e g-col-16 mq-1023-g-col-8">
            <span>Powered by</span>
            <img src={LogoMGoal88} alt="mgoal88 logo" className="logo" />
            <Button text="Bet Now" classList="h-32 mq-1023-h-24" />
        </div>
    )
}

const Snippet = () => {
    const mq = useMediaQuery([
        {
            match: "(min-width: 1024px)",
            returnTrue: "desktop"
        }
    ])

    return (
        <Container.Module name="snippet-match-schedules">
            <SectionHeading text="MATCH SCHEDULES" col2={mq.includes('desktop') && <PoweredBy />} />
            <div className="row mq-1023-m-b-24">
                <Modules.ListInline />
            </div>
            {!mq.includes('desktop') &&
                <div className="row ta-center">
                    <PoweredBy />
                </div>
            }
        </Container.Module>
    )
}

export default Snippet