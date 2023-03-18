const axios = require('axios')
const _ = require('lodash')

const domain = "https://www.scorebat.com"
const toVidURL = "/video-api/v3/feed/"
const key = "MTk5OThfMTY1MzczNTAxOV8wMWExMWE2MzhkNTUxZTZhMDM2ZDVjNDg3OGNiZTFlYmUzMjAwM2Jk"
const vidURL = `${domain + toVidURL}?token=${key}`

const resolvers = {
    Query: {
        livestream: () => getVideos()
    }
}

const getVideos = async () => {
    const result = await axios.get(vidURL)
    return result.data.response
}

module.exports = resolvers