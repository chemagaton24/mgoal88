import Cards from '../components/cards'
import Container from '../components/containers'

const Sportsbook = () => {
    return (
        <div className="page-content page-content-livecasino">
            <section>
                <Container.PageSlogan
                    slogan="EXPERIENCE SPORTS IN A WHOLE NEW AND EXCITING WAY!"
                    miniBlurbs={[
                        { label: 'Best Odds', icon: 'cash' },
                        { label: 'Live Events', icon: 'live-chat' },
                        { label: 'Wide Selection', icon: 'soccer' },
                        { label: 'Instant Payouts', icon: 'pile-coins' },
                        { label: 'Dailty Rebates', icon: 'promotion' },
                    ]}
                />
            </section>
            <section>
                <div className="inner-box">
                    <div className="row m-b-32 flex flex-jc-b flex-col-expand g-col-16">
                        <div className="col col-1">
                            <Cards.Modules.PlayNow.Boxed kind="sportsbook" provider="m-sports" />
                        </div>
                        <div className="col col-2">
                            <Cards.Modules.PlayNow.Boxed kind="sportsbook" provider="saba-sports" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sportsbook