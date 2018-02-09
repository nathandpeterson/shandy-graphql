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
        description: {type: GraphQLString},
        author: { type: AuthorType,
        resolve(){

            }
        }
    })
})

module.exports = BookType