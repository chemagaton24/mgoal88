import { Button } from '../../../../button'
import Container from '../../../../containers'
import './style.css'

interface SportsbookType {
    kind: 'sportsbook'
    provider: 'm-sports' | 'saba-sports'
}

interface LivecasinoType {
    kind: 'livecasino'
    provider: 'club88-europe' | 'laliga-room'
}

type PropsType = SportsbookType | LivecasinoType

const Boxed = (props: PropsType) => {
    return (
        <Container.Module name="playnow-boxed">
            <div className="cover"
                style={{ backgroundImage: `url('${require(`./images/${props.kind}/${props.provider}.png`)}')` }}
            ></div>
            <Button text="PLAY NOW" classList="h-48" />
        </Container.Module>
    )
}

export default Boxed