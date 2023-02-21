import { classArrayToString } from '../../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    src: string
}

type PropsType = LoadedType | LoadingType

const Cover = (props: PropsType) => {
    const classList = classArrayToString([
        'cover',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading &&
                <div className="bg" style={{ backgroundImage: `url('${props.src}')` }}></div>
            }
        </div>
    )
}

export default Cover