import { ButtonClose } from "../../button"
import { useCloseAllModal } from "../hooks"

interface PropsType {
    title?: string
}

const Header = (props: PropsType) => {
    const closeAll = useCloseAllModal()

    return (
        <div className="modal-header">
            <div className="flex flex-jc-b g-col-8 h-100">
                <div className="col col-1">
                    {props.title &&
                        <h4 className="modal-title">{props.title}</h4>
                    }
                </div>
                <div className="col col-2"><ButtonClose onClick={() => closeAll(true)} /></div>
            </div>
        </div>
    )
}

export default Header