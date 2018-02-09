
const { GraphQLSchema } = require('graphql')
const Query = require('./queries/RootQuery')

module.exports = new GraphQLSchema({
    query: Query
})