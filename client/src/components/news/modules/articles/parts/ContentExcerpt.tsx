import { classArrayToString, cleanContent } from '../../../../../utils/helpers'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    excerpt: string
}

type PropsType = LoadedType | LoadingType

const ContentExcerpt = (props: PropsType) => {
    const classList = classArrayToString([
        'content',
        props.loading && 'skeleton'
    ])

    return (
        <p className={classList}>
            {!props.loading && <>
                <span className="content-inline">{cleanContent(props.excerpt)}</span>
                <a href="/#"><strong>Read more</strong></a>
            </>}
        </p>
    )
}

export default ContentExcerpt