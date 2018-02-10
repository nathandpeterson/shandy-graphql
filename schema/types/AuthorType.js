const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const BookType = require('./BookType')

const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type : GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        // books: { type: new GraphQLList(BookType)},
    })
})

module.exports = AuthorType