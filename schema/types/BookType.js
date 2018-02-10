const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const AuthorType = require('./AuthorType')

const BookType = new GraphQLObjectType({
    name: 'BookType',
    fields: () => ({
        id: { type : GraphQLID },
        title: { type: GraphQLString },
        pub_year: {type: GraphQLString},
        file : { type: GraphQLString},
        authors: { type: new GraphQLList(AuthorType)}
    })
})

module.exports = BookType