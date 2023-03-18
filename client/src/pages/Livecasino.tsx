import Cards from '../components/cards'
import Container from '../components/containers'

const Livecasino = () => {
    return (
        <div className="page-content page-content-livecasino">
            <section>
                <Container.PageSlogan
                    slogan="AN AUTHENTIC LIVE DEALER EXPERIENCE ONLINE!"
                    miniBlurbs={[
                        { label: '30+ Tables', icon: 'poker-card' },
                        { label: 'Live 24 Hour', icon: 'live-chat' },
                        { label: 'HD Video', icon: 'video-camera' },
                        { label: 'Instant Payouts', icon: 'pile-coins' },
                        { label: 'Dailty Rebates', icon: 'promotion' },
                    ]}
                />
            </section>
            <section>
                <div className="inner-box">
                    <div className="row m-b-32 flex flex-jc-b flex-col-expand g-col-16">
                        <div className="col col-1">
                            <Cards.Modules.PlayNow.Boxed kind="livecasino" provider="laliga-room" />
                        </div>
                        <div className="col col-2">
                            <Cards.Modules.PlayNow.Boxed kind="livecasino" provider="club88-europe" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Livecasino