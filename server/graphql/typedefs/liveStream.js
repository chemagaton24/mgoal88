const typeDefs = `
extend type Query {
    livestream: [CompetitionType]
}

type CompetitionType {
    title: String
    competition: String
    thumbnail: String
    date: String
    videos: [VideoType]
}

type VideoType {
    title: String
    embed: String
}
`

module.exports = typeDefs