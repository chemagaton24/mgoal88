import "./style.css"

interface PropsType {
    onClick: () => void
}

const ButtonClose = (props: PropsType) => {
    return (
        <button type="button" className="btn-close" onClick={props.onClick}>
            <i className="icon icon-close white s-16"></i>
        </button>
    )
}

export default ButtonClose