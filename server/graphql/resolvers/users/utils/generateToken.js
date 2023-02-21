const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

module.exports = (userId, context) => {
    const accessTokenDuration = 25 //minutes
    const refreshTokenDuration = 50 //days

    const accessToken = jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: `${accessTokenDuration}s`
    })

    const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: `${refreshTokenDuration}s`
    })

    context.res.cookie('refreshtoken', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        expires: dayjs().add(refreshTokenDuration, 'second').toDate()
    })

    return { accessToken }
}