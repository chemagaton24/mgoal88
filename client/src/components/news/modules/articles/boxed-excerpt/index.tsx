import { classArrayToString } from '../../../../../utils/helpers'
import Container from '../../../../containers'
import Parts from '../parts'
import './style.css'

type LoadingType = {
    loading: true
}

type LoadedType = {
    loading?: false
    coverSrc: string
    title: string
    categoryText: string
    publishedAt: string
}

type PropsType = LoadedType | LoadingType

const BoxedExcerpt = (props: PropsType) => {
    const classList = classArrayToString([
        props.loading && 'skeleton'
    ])

    return (
        <Container.Module name="boxed-excerpt-article" kind="article" classList={classList}>
            {!props.loading && <>
                <Parts.Cover src={props.coverSrc} />
                <div className="info">
                    <div className="row m-b-8">
                        <Parts.CategoryDate
                            categoryText={props.categoryText}
                            publishedAt={props.publishedAt}
                        />
                    </div>
                    <div className="row">
                        <Parts.Title text={props.title} />
                    </div>
                </div>
            </>}
        </Container.Module>
    )
}

export default BoxedExcerpt