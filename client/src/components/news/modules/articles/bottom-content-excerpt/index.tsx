import { useMediaQuery } from '../../../../../utils/useMediaQuery'
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
    excerpt: string
    categoryText: string
    publishedAt: string
}

type PropsType = LoadedType | LoadingType

const DesktopTabletLayout = (props: PropsType) => {
    return (<>
        <div className="row m-b-16 mq-1023-m-b-8">
            {!props.loading ? <Parts.Cover src={props.coverSrc} /> : <Parts.Cover loading />}
        </div>
        <div className="row m-b-16 mq-1023-m-b-8">
            {!props.loading ?
                <Parts.CategoryDate categoryText={props.categoryText} publishedAt={props.publishedAt} /> :
                <Parts.CategoryDate loading />
            }
        </div>
        <div className="row m-b-16 mq-1023-m-b-8">
            {!props.loading ? <Parts.Title text={props.title} /> : <Parts.Title loading />}
        </div>
        <div className="row">
            {!props.loading ? <Parts.ContentExcerpt excerpt={props.excerpt} /> : <Parts.ContentExcerpt loading />}
        </div>
    </>)
}

const MobileLayout = (props: PropsType) => {
    return (<>
        <div className="flex flex-jc-s g-col-8">
            <div className="col col-1 flex-min-width-unset">
                {!props.loading ? <Parts.Cover src={props.coverSrc} /> : <Parts.Cover loading />}
            </div>
            <div className="col col-2 flex-grow">
                <div className="row m-b-8">
                    {!props.loading ?
                        <Parts.CategoryDate categoryText={props.categoryText} publishedAt={props.publishedAt} /> :
                        <Parts.CategoryDate loading />
                    }
                </div>
                <div className="row">
                    {!props.loading ? <Parts.Title text={props.title} /> : <Parts.Title loading />}
                </div>
            </div>
        </div>
    </>)
}

const BottomContentExcerpt = (props: PropsType) => {
    const mq = useMediaQuery([
        {
            match: "(min-width: 768px)",
            returnTrue: "desktop-tablet"
        },
        {
            match: "(max-width: 767px)",
            returnTrue: "mobile"
        }
    ])

    return (
        <Container.Module name="bottom-content-excerpt" kind="article">
            {mq.includes("desktop-tablet") &&
                <>
                    {!props.loading ?
                        <DesktopTabletLayout
                            coverSrc={props.coverSrc}
                            title={props.title}
                            excerpt={props.excerpt}
                            categoryText={props.categoryText}
                            publishedAt={props.publishedAt}
                        /> :
                        <DesktopTabletLayout loading />
                    }
                </>
            }
            {mq.includes("mobile") &&
                <>
                    {!props.loading ?
                        <MobileLayout
                            coverSrc={props.coverSrc}
                            title={props.title}
                            excerpt={props.excerpt}
                            categoryText={props.categoryText}
                            publishedAt={props.publishedAt}
                        /> :
                        <MobileLayout loading />
                    }
                </>
            }
        </Container.Module>
    )
}

export default BottomContentExcerpt