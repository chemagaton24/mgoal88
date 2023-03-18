import { useEffect, useRef, useState } from 'react'
import Modules from '../../modules'
import Container from '../../../containers'
import { useGetVideos } from '../../hooks'
import { VideoItemType } from '../../interfaces'
import SectionHeading from '../../../section-heading'

const Snippet = () => {
    const col1Ref = useRef<HTMLDivElement | null>(null)
    const col2Ref = useRef<HTMLDivElement | null>(null)
    const [col2Height, setCol2Height] = useState<number>()

    useEffect(() => {
        const col1Elem = col1Ref?.current
        const col2Elem = col2Ref?.current
        if (col1Elem && col2Elem) {
            const observer = new ResizeObserver(() => {
                let col1Height: number | undefined
                if (window.innerWidth > 767) {
                    col1Height = col1Elem['clientHeight']
                }
                setCol2Height(col1Height)
            })
            observer.observe(col1Elem)
            observer.observe(col2Elem)
        }
    }, [])


    const { loading, error, data } = useGetVideos()
    const [playVideo, setPlayVideo] = useState<Omit<VideoItemType, 'cover' | 'setPlayVideo'>>()

    useEffect(() => {
        if (!loading && !error && data) {
            const { title, competition, videos } = data.livestream[0]
            const teams = title.split(' - ')
            const teamA = teams[0]
            const teamB = teams[1]
            const status = videos[0].title
            let videoSrcArr = videos[0].embed.split("src='")
            videoSrcArr = videoSrcArr[1].split("&");
            const videoSrc = videoSrcArr[0]

            setPlayVideo({ teamA, teamB, status, competition, videoSrc })
        }
    }, [loading, error, data])

    return (
        <Container.Module name="snippet-live-stream">
            <SectionHeading text="LIVE STREAM" />
            <div className="row flex flex-jc-b flex-col-expand g-col-16 mq-1023-g-col-8 mq-767-flex-direction-col mq-767-g-row-24">
                <div className="col col-1" ref={col1Ref}>
                    <Modules.VideoPlayer value={{ loading, error, data: { playVideo } }} />
                </div>
                <div className="col col-2" ref={col2Ref} style={{ height: col2Height }}>
                    <Modules.PlayList value={{ loading, error, data, setPlayVideo }} />
                </div>
            </div>
        </Container.Module>
    )
}

export default Snippet