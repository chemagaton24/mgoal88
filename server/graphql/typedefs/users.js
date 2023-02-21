const { gql } = require('apollo-server-express')

const typeDefs = gql`
    extend type Query {
        test: String
    }

    extend type Mutation {
        register(username: String!, password: String!, email: String!, name: String!): AccessTokenType!
        checkUsernameExist(username: String!): Boolean!
        checkEmailExist(email: String!): Boolean!
        login(username: String!, password: String!): AccessTokenType!
        logout: Boolean!
        verifyAccessToken: Boolean!
        refreshToken: AccessTokenType!
    }

    type AccessTokenType {
        accessToken: String!
    }
`

module.exports = typeDefs