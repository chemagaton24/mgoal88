import { classArrayToString } from '../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    teamA: string
    teamB: string
}

type PropsType = LoadedType | LoadingType

const Versus = (props: PropsType) => {
    const classList = classArrayToString([
        'versus',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading && <>
                {props.teamA} vs {props.teamB}
            </>}
        </div>
    )
}

export default Versus