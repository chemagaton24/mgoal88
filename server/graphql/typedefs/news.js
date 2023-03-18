const typeDefs = `
extend type Query {
    articles(skip: Int, take: Int): [ArticleType]
    category(cat_id: Int!): CategoryType
}

type ArticleType {
    title: String
    slug: String
    cat_id: ID
    cover: String
    description: String
    body: String
    published_at: String
    category: CategoryType
    domain: String
}

type CategoryType {
    name: String
    slug: String
}
`

module.exports = typeDefs