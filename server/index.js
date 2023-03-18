const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const startServer = async () => {
    await mongoose
        .connect('mongodb+srv://smough24:pass1234@cluster0.swx36.mongodb.net/mgoal88')
        .then(() => console.log('mongodb connected'))
        .catch((err) => { throw new Error(err) })

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req, res }) => ({ req, res })
    })
    await apolloServer.start()

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cookieParser())
    apolloServer.applyMiddleware({
        app,
        cors: {
            credentials: true,
            origin: ['https://studio.apollographql.com', 'http://localhost:3000']
        }
    })

    app.listen(4000, () => console.log('listening on port 4000'))
}

startServer()