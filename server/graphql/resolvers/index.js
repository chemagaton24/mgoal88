const usersResolver = require('./users')
const newsResolvers = require('./news')
const liveStreamResolvers = require('./liveStream')

const resolvers = {
    Query: {
		...newsResolvers.Query,
		...liveStreamResolvers.Query
	},
	...newsResolvers.Types,
    Mutation: {
        ...usersResolver.Mutation
    }
}

module.exports = resolvers