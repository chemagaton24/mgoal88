import { gql, useQuery } from '@apollo/client'

export const useGetVideos = () => {
    const GET_VIDEOS = gql`
    {
        livestream {
            title
            date
            thumbnail
            competition
            videos {
                title
                embed
            }
        }
    }
    `

    const { loading, error, data } = useQuery(GET_VIDEOS)

    return { loading, error, data }
}