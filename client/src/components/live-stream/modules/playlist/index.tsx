import Modules from '..'
import Scroller from '../../../../utils/scroller'
import Container from '../../../containers'
import { PlayListType } from '../../interfaces'
import './style.css'

const PlayList = (props: { value: PlayListType }) => {
    const { loading, error, data, setPlayVideo } = props.value

    return (
        <Container.Module name="playlist-live-stream" classList="h-100">
            <Scroller direction="y">
                <ul className="flex flex-ai-s flex-col-expand flex-direction-col g-row-16 mq-1023-g-row-8">
                    {((loading || error) && !data) &&
                        Array(4).fill(<Modules.VideoItem loading />).map((item, key) => <li key={key}>{item}</li>)
                    }
                    {(!loading && !error && data) &&
                        data.livestream.map((item: typeof data, key: number) => {
                            const { title, competition, thumbnail, videos } = item
                            const teams = title.split(' - ')
                            const teamA = teams[0]
                            const teamB = teams[1]
                            const status = videos[0].title
                            const cover = thumbnail
                            let videoSrcArr = videos[0].embed.split("src='")
                            videoSrcArr = videoSrcArr[1].split("&");
                            const videoSrc = videoSrcArr[0]

                            return (
                                <li key={key}>
                                    <Modules.VideoItem value={{
                                        teamA,
                                        teamB,
                                        competition,
                                        status,
                                        cover,
                                        videoSrc,
                                        setPlayVideo
                                    }} />
                                </li>
                            )
                        })
                    }
                </ul>
            </Scroller>
        </Container.Module>
    )
}

export default PlayList