import { classArrayToString } from '../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    cover: string
}

type PropsType = LoadedType | LoadingType

const Cover = (props: PropsType) => {
    const classList = classArrayToString([
        'cover h-100',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading && <>
                <span className="placeholder">
                    Photo<br />
                    Unavailable
                </span>
                <div className="bg" style={{ backgroundImage: `url('${props.cover}')` }}>

                </div>
            </>}
        </div>
    )
}

export default Cover