import { useQuery, gql } from '@apollo/client'

export const useGetArticles = (take?: number, skip?: number) => {

    const GET_ARTICLES = gql`
    query Articles {
        articles(take: ${String(take)}, skip: ${String(skip)}) {
            title
            slug
            cat_id
            cover
            description
            body
            published_at
            domain
            category {
                name
                slug
            }
        }
    }
    `

    const { loading, error, data } = useQuery(GET_ARTICLES)

    return { loading, error, data }
}