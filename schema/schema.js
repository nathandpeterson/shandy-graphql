const { GraphQLSchema } = require('graphql')


const query = require('./types/root_query_type')

module.exports = new GraphQLSchema({
    query
})