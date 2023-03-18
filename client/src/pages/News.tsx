import Container from '../components/containers'
import LiveStream from '../components/live-stream'
import MatchSchedules from '../components/match-schedules'
import News from '../components/news'

const PageNews = () => {
    return (
        <Container.Page name="news">
            <Container.Section name="match-schedules" classList="section-snippet-match-schedules">
                <div className="inner-box">
                    <MatchSchedules.Layouts.Snippet />
                </div>
            </Container.Section>
            <Container.Section name="live-stream" padded gray>
                <div className="inner-box">
                    <LiveStream.Layouts.Snippet />
                </div>
            </Container.Section>
            <Container.Section padded>
                <div className="inner-box">
                    <Container.Section name="news" classList="m-b-48">
                        <News.Layouts.Snippet />
                    </Container.Section>
                </div>
            </Container.Section>
        </Container.Page>
    )
}

export default PageNews