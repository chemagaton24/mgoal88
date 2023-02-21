import { classArrayToString } from '../../../../utils/helpers'
import './style.css'

interface PropsType {
    text: string
    type?: 'button' | 'submit'
    theme?: 'default' | 'transparent-light' | 'transparent-dark'
    classList?: string
    onClick?: () => void
}

const Button = (props: PropsType) => {
    const type = props.type ? props.type : 'button'

    const classList = classArrayToString([
        'btn',
        `theme-${props.theme ? props.theme : 'default'}`,
        props.classList && props.classList
    ])

    return (
        <button type={type}
            className={classList}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button