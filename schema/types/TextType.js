const graphql = require('graphql')
const { GraphQLObjectType,
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const AuthorType = require('./AuthorType')

const TextType = new GraphQLObjectType({
    name: 'TextType',
    fields: () => ({
        id: { type : GraphQLID },
        text: { type: GraphQLString }
    })
})

module.exports = TextType
