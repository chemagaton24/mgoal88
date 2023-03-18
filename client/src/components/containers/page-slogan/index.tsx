import './style.css'

interface MiniBlurbsType {
    label: string
    icon: 'poker-card' |
    'live-chat' |
    'video-camera' |
    'pile-coins' |
    'promotion' |
    'cash' |
    'live-events' |
    'soccer'
}

interface PropsType {
    slogan: string,
    miniBlurbs: MiniBlurbsType[]
}

const PageSlogan = (props: PropsType) => {
    return (
        <div className="page-slogan">
            <div className="inner-box">
                <div className="inner">
                    <div className="row m-b-32">
                        <h2 className="slogan">{props.slogan}</h2>
                    </div>
                    <div className="row m-b-32">
                        <div className="mini-blurbs">
                            <ul className="flex flex-inline g-col-16">
                                {props.miniBlurbs.map((item, key) => {
                                    return (
                                        <li key={key}>
                                            <i className={`icon icon-${item.icon} gray-white s-32 m-b-8`}></i>
                                            <div className="label">{item.label}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSlogan