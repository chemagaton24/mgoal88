import { classArrayToString } from "../../../../../utils/helpers"
import { QueryType } from "../../../interfaces"

const Iframe = (props: { value: QueryType }) => {
    const { loading, error, data } = props.value

    const classListArr = [
        'video-player-iframe',
        loading && 'skeleton'
    ]

    const classList = classArrayToString(classListArr)

    return (
        <div className={classList}>
            {(!loading && !error && data.playVideo) &&
                <iframe src={`${data.playVideo.videoSrc}&autoplay=1&mute=1`} title="Video Player"></iframe>
            }
        </div >
    )
}

export default Iframe