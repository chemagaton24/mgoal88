const dayjs = require('dayjs')
const { registerSchema, loginSchema } = require('./utils/validation')
const generateToken = require('./utils/generateToken')
const Users = require('../../../mongoose/models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const resolvers = {
    Mutation: {
        register: async (_parent, args, context) => {
            const { username, password, email, name } = args

            try {
                await registerSchema.validate({ username, password, email, name }, { abortEarly: false })
            } catch (err) {
                let errors = []
                err.inner.forEach(item => {
                    errors.push({
                        name: item.path,
                        errors: item.errors
                    })
                })

                throw new Error(JSON.stringify(errors))
            }

            const usernameExist = await Users.findOne({ username })
            const emailExist = await Users.findOne({ email })

            if (usernameExist || emailExist) {
                const exist = [
                    (usernameExist) && 'Username',
                    (emailExist) && 'Email',
                ]
                const message = [
                    exist.filter(Boolean).join(', '),
                    'already in use'
                ]
                throw new Error(message.join(' ').trim())
            }

            const salt = 10
            const encryptedPassword = bcrypt.hashSync(password, salt)

            const result = await Users.create({ username, password: encryptedPassword, email, name })
            const userId = result.id

            const { accessToken } = await generateToken(userId, context)
            return { accessToken }
        },
        checkUsernameExist: async (_parent, args) => {
            const { username } = args
            const usernameExist = await Users.findOne({ username })
            if (usernameExist) {
                return true
            }
            return false
        },
        checkEmailExist: async (_parent, args) => {
            const { email } = args
            const emailExist = await Users.findOne({ email })
            if (emailExist) {
                return true
            }
            return false
        },
        login: async (_parent, args, context) => {
            const { username, password } = args

            try {
                await loginSchema.validate({ username, password }, { abortEarly: false })
            } catch (err) {
                let errors = []
                err.inner.forEach(item => {
                    errors.push({
                        name: item.path,
                        errors: item.errors
                    })
                })

                throw new Error(JSON.stringify(errors))
            }

            const foundUser = await Users.findOne({ username })
            if (!foundUser) throw new Error('User not found')
            const match = await bcrypt.compare(password, foundUser.password)
            if (!match) throw new Error('User not found')

            const userId = foundUser.id
            const { accessToken } = await generateToken(userId, context)
            return { accessToken }
        },
        logout: (_parent, _args, context) => {
            context.res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                sameSite: 'none',
                secure: true,
                expires: new Date(0)
            })

            return true
        },
        verifyAccessToken: async (_parent, _args, context) => {
            let authorizationToken = context.req.header('authorization')
            if (!authorizationToken) throw new Error('authorization required')
            authorizationToken = authorizationToken.split(' ')
            authorizationToken = authorizationToken[1]

            const resultJwt = jwt.verify(authorizationToken, process.env.ACCESS_TOKEN_SECRET)

            const foundUser = await Users.findOne({ id: resultJwt.id })
            if (!foundUser) throw new Error('Unauthorized')
            const token = context.req.cookies['refreshtoken']
            if (!token) throw new Error('Unauthorized')

            return true
        },
        refreshToken: async (_parent, _args, context) => {
            const token = context.req.cookies['refreshtoken']
            let userId
            try {
                const resultJwt = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
                userId = resultJwt.id
            } catch (err) {
                throw new Error('Unauthorized')
            }
            const { accessToken } = generateToken(userId, context)

            return { accessToken }
        }
    }
}

module.exports = resolvers