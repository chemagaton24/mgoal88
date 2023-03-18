const { gql } = require('apollo-server-express')
const usersTypeDefs = require('./users')
const liveStreamTypeDefs = require('./liveStream')
const newsTypeDefs = require('./news')

const typeDefs = gql`
    type Query
    type Mutation

    ${usersTypeDefs}
    ${liveStreamTypeDefs}
    ${newsTypeDefs}
`

module.exports = typeDefs