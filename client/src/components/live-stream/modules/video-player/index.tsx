import Container from '../../../containers'
import { QueryType } from '../../interfaces'
import Parts from './parts'
import './style.css'

const VideoPlayer = (props: { value: QueryType }) => {
    const { loading, error, data } = props.value

    return (
        <Container.Module name="video-player-live-stream">
            <div className="row video-player-n-board">
                <div className="row">
                    
                </div>
                <div className="row">
                    <Parts.Iframe value={{ loading, error, data }} />
                </div>
            </div>
        </Container.Module>
    )
}

export default VideoPlayer