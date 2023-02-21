import { Fragment } from 'react'
import { cleanURL } from '../../../../utils/helpers'
import { useMediaQuery } from '../../../../utils/useMediaQuery'
import { useGetArticles } from '../../hooks'
import Cards from '../../../cards'
import Container from '../../../containers'
import Modules from '../../modules'
import SectionHeading from '../../../section-heading'

const Snippet = () => {
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
        <Container.Module name="snippet-live-stream">
            <SectionHeading text="TOP NEWS" />
            <div className="row m-b-32 mq-1023-m-b-24">
                {mq.includes('desktop-tablet') &&
                    <ArticlesBoxedLayoutDesktop />
                }
                {mq.includes('mobile') &&
                    <ArticlesBoxedLayoutMobile />
                }
            </div>
            {mq.includes('desktop-tablet') &&
                <div className="row flex flex-jc-b flex-col-expand g-col-16 mq-1023-g-col-8 m-b-32 mq-1023-m-b-24">
                    <div className="col col-1">
                        <Cards.Modules.PlayNow.Brochure provider="m-sports" tagline="MAKE SPORTS MORE EXCITING" />
                    </div>
                    <div className="col col-2">
                        <Cards.Modules.PlayNow.Brochure provider="saba-sports" tagline="EXPERIENCE SPORTS IN A NEW WAY" />
                    </div>
                </div>
            }
            <div className="row">
                {mq.includes('desktop-tablet') &&
                    <ArticleBottomContentExcerptLayoutDesktop />
                }
                {mq.includes('mobile') &&
                    <ArticleBottomContentExcerptLayoutMobile />
                }
            </div>
        </Container.Module>
    )
}

const ArticlesBoxedLayoutDesktop = () => {
    const { loading, error, data } = useGetArticles(2, 0)

    return (
        <ul className="flex flex-jc-b flex-col-expand g-col-16 mq-1023-g-col-8">
            {((loading || error) && !data) &&
                Array(2).fill(<Modules.Articles.BoxedExcerpt loading />).map((item, key) => <li key={key}>{item}</li>)
            }
            {(!loading && !error && data) &&
                data.articles.map((item: typeof data.articles, key: number) => {
                    const { title, published_at, category, cover, domain } = item
                    const coverSrc = cleanURL(`${domain}/${cover}`)
                    const categoryText = category.name
                    const publishedAt = published_at

                    return (
                        <li key={key}>
                            <Modules.Articles.BoxedExcerpt
                                coverSrc={coverSrc}
                                title={title}
                                categoryText={categoryText}
                                publishedAt={publishedAt}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const ArticlesBoxedLayoutMobile = () => {
    const { loading, error, data } = useGetArticles(1, 0)

    return (<>
        {((loading || error) && !data) &&
            <Modules.Articles.BoxedExcerpt loading />
        }
        {(!loading && !error && data) &&
            (() => {
                const { title, published_at, category, cover, domain } = data.articles[0]
                const coverSrc = cleanURL(`${domain}/${cover}`)
                const categoryText = category.name
                const publishedAt = published_at

                return (
                    <Modules.Articles.BoxedExcerpt
                        coverSrc={coverSrc}
                        title={title}
                        categoryText={categoryText}
                        publishedAt={publishedAt}
                    />
                )
            })()
        }
    </>)
}
const ArticleBottomContentExcerptLayoutDesktop = () => {
    const { loading, error, data } = useGetArticles(4, 2)

    return (
        <ul className="flex flex-jc-s flex-col-expand g-col-16 mq-1023-g-col-8">
            {((loading || error) && !data) &&
                Array(4).fill(<Modules.Articles.BottomContentExcerpt loading />).map((item, key) => <li key={key}>{item}</li>)
            }
            {(!loading && !error && data) &&
                data.articles.map((item: typeof data.articles, key: number) => {
                    const { title, body, published_at, category, cover, domain } = item
                    const coverSrc = cleanURL(`${domain}/${cover}`)
                    const categoryText = category.name
                    const publishedAt = published_at

                    return (
                        <li key={key}>
                            <Modules.Articles.BottomContentExcerpt
                                coverSrc={coverSrc}
                                title={title}
                                excerpt={body}
                                categoryText={categoryText}
                                publishedAt={publishedAt}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const ArticleBottomContentExcerptLayoutMobile = () => {
    const { loading, error, data } = useGetArticles(4, 2)

    return (
        <ul className="flex flex-jc-s flex-col-expand flex-direction-col g-row-16">
            {((loading || error) && !data) &&
                Array(4).fill(<Modules.Articles.BottomContentExcerpt loading />).map((item, key) => <li key={key}>{item}</li>)
            }
            {(!loading && !error && data) &&
                data.articles.map((item: typeof data.articles, key: number) => {
                    const { title, body, published_at, category, cover, domain } = item
                    const coverSrc = cleanURL(`${domain}/${cover}`)
                    const categoryText = category.name
                    const publishedAt = published_at

                    return (<Fragment key={key}>
                        {key === 0 &&
                            <li><Cards.Modules.PlayNow.Brochure provider="m-sports" tagline="MAKE SPORTS MORE EXCITING" /></li>
                        }
                        {key === 2 &&
                            <li><Cards.Modules.PlayNow.Brochure provider="saba-sports" tagline="EXPERIENCE SPORTS IN A NEW WAY" /></li>
                        }
                        <li>
                            <Modules.Articles.BottomContentExcerpt
                                coverSrc={coverSrc}
                                title={title}
                                excerpt={body}
                                categoryText={categoryText}
                                publishedAt={publishedAt}
                            />
                        </li>
                    </Fragment>)
                })
            }
        </ul >
    )
}

export default Snippet