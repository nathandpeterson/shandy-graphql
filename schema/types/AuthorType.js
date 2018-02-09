const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type : GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },

    })
})

module.exports = AuthorType