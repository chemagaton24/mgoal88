import { classArrayToString } from '../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    competition: string
}

type PropsType = LoadedType | LoadingType

const Competition = (props: PropsType) => {
    const classList = classArrayToString([
        'competition m-b-4',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading &&
                props.competition
            }
        </div>
    )
}

export default Competition