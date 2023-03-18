import { classArrayToString, formatDate } from '../../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    categoryText: string
    publishedAt: string
}

type PropsType = LoadedType | LoadingType

const CategoryDate = (props: PropsType) => {
    const classList = classArrayToString([
        'category-date',
        props.loading && 'skeleton'
    ])

    return (
        <div className={classList}>
            {!props.loading && <>
                {props.categoryText} | {formatDate(props.publishedAt)}
            </>}
        </div>
    )
}

export default CategoryDate