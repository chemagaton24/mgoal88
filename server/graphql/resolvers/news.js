const axios = require('axios')
const _ = require('lodash')

const domain = "https://msportsid.com"
const toNewsURL = "/api/news"
const toCategoryURL = "/api/news/category/all"
const key = "JDJ5JDEwJG9NaHM3Z3h3ZWxGZncvSS9uYXd6RHVLUzlPd3oxOTJsWnNRTUc3ZkM0QlBIZHAvNWlYZ0JP"
const newsURL = `${domain + toNewsURL}?key=${key}`
const categoryURL = `${domain + toCategoryURL}?key=${key}`

const resolvers = {
	Query: {
		articles: (parent, args) => getArticles(parent, args),
		category: (parent, args) => getCategory(parent, args)
	},
	Types: {
		ArticleType: {
			category: (parent, args) => getCategory(parent, args),
			domain: () => domain
		}
	}
}

const getCategory = async (parent, args) => {
	const result = await axios.get(categoryURL)
	const id = args.cat_id ? args.cat_id : parent.cat_id
	return _.find(result.data.category, { id: id })
}

const getArticles = async (_parent, args) => {
	const fixedPerPage = 12
	let promises = []
	const total = Math.ceil((args.take || 1) / fixedPerPage)
	const skip = args.skip || 0

	for (i = 1; i <= total; i++) {
		const result = await axios.get(`${newsURL}&page=${i}`)
		promises = [...promises, ...result.data.article.data]
	}

	const take = args.take || promises.length
	return _.slice(promises, skip, skip + take);
}

module.exports = resolvers