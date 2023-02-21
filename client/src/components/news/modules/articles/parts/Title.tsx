import { classArrayToString } from '../../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    text: string
}

type PropsType = LoadedType | LoadingType

const Title = (props: PropsType) => {
    const classList = classArrayToString([
        'title',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading && props.text}
        </div>
    )
}

export default Title