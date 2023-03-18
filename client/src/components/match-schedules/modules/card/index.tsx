import Container from "../../../containers"
import "./style.css"

const Card = () => {
    return (
        <Container.Module name="card-match-schedules">
            <div className="row flex flex-jc-b g-col-8 m-b-14">
                <div className="league">League Name</div>
            </div>
            <div className="row flex flex-direction-col flex-ai-s g-row-16">
                <div className="team team-1 flex flex-jc-s g-col-8">
                    <i className="icon icon-team arsenal s-24"></i>
                    <span>TEAM 1</span>
                </div>
                <div className="team team-1 flex flex-jc-s g-col-8">
                    <i className="icon icon-team manchester-city s-24"></i>
                    <span>TEAM 2</span>
                </div>
            </div>
        </Container.Module>
    )
}

export default Card