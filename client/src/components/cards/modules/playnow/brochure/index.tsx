import { useMediaQuery } from '../../../../../utils/useMediaQuery'
import { Button } from '../../../../button'
import Container from '../../../../containers'
import './style.css'

interface PropsType {
    provider: 'm-sports' | 'saba-sports'
    tagline: string
}

const Brochure = (props: PropsType) => {
    const mq = useMediaQuery([
        {
            match: '(min-width: 1024px)',
            returnTrue: 'desktop'
        }
    ])
    
    return (
        <Container.Module name="brochures-playnow" style={{ backgroundImage: `url('${require(`./images/${props.provider}.jpg`)}')` }}>
            <div className="flex flex-jc-b g-col-8 h-100">
                <div className="col col-1">
                    <div className="row m-b-4">
                        <img src={require(`../../../../../assets/images/logos/${props.provider}-white.svg`)} className="logo-img" alt="logo" />
                    </div>
                    <div className="row m-b-4">
                        <div className="tagline">{props.tagline}</div>
                    </div>
                </div>
                {mq.includes('desktop') &&
                    <div className="col col-2 flex-min-width-unset">
                        <Button text="play now" classList="mq-1400-h-32" />
                    </div>
                }
            </div>
        </Container.Module>
    )
}

export default Brochure