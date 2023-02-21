import { MouseEvent } from 'react'

const LiveChat = () => {
    const openLiveChat = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
    }

    return (
        <a href="/#" onClick={openLiveChat} className="livechat flex flex-inline g-col-4 ">
            <i className="icon icon-chat yellow s-20"></i>
            <span>Live Help</span>
        </a>
    )
}

export default LiveChat