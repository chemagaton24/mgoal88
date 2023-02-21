import { ApolloError } from '@apollo/client'
import { Dispatch, SetStateAction } from 'react'

export interface VideoItemType {
    teamA: string
    teamB: string
    competition: string
    status: string
    cover: string
    videoSrc: string
    setPlayVideo: Dispatch<SetStateAction<Omit<VideoItemType, "cover" | "setPlayVideo"> | undefined>>
}

export type PlayVideoType = Omit<VideoItemType, 'cover'>

export type PlayListType = QueryType & Pick<VideoItemType, 'setPlayVideo'>

export interface QueryType {
    loading: boolean
    error: ApolloError | undefined
    data: any
}