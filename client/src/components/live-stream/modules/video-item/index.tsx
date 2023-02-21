import { classArrayToString } from '../../../../utils/helpers'
import { useMediaQuery } from '../../../../utils/useMediaQuery'
import { Button } from '../../../button'
import Container from '../../../containers'
import { VideoItemType } from '../../interfaces'
import Parts from '../parts'
import './style.css'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    value: VideoItemType
}

type PropsType = LoadedType | LoadingType

const VideoItem = (props: PropsType) => {
    const mq = useMediaQuery([
        {
            match: "(max-width: 550px)",
            returnTrue: "small-mobile"
        }
    ])

    const classList = classArrayToString([
        props.loading && 'skeleton'
    ])

    const playVideoFn = () => {
        if (!props.loading) {
            const { teamA, teamB, status, competition, videoSrc, setPlayVideo } = props.value
            setPlayVideo({ teamA, teamB, status, competition, videoSrc })
        }
    }

    return (<>
        <Container.Module name="video-item-live-stream" classList={classList} onClick={playVideoFn}>
            {!props.loading &&
                <div className="flex flex-jc-s g-col-16 mq-1023-g-col-8 h-100">
                    <div className="col col-1 h-100 flex-min-width-unset">
                        <Parts.Cover cover={props.value.cover} />
                    </div>
                    <div className="col col-2 flex-grow">
                        <div className="content flex flex-jc-s g-col-24">
                            <div className="col col-1 flex-grow">
                                <Parts.Competition competition={props.value.competition} />
                                <Parts.Versus teamA={props.value.teamA} teamB={props.value.teamB} />
                            </div>
                            {!mq.includes("small-mobile") &&
                                <div className="col col-2 flex-min-width-unset">
                                    <Button text="Play Stream" classList="h-32 mq-1023-h-24" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </Container.Module>
    </>)
}

export default VideoItem