const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLID, 
        GraphQLString,
        GraphQLNonNull } = graphql

const BookType = require('../types/BookType')
const AuthorType = require('../types/AuthorType')
        
module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue, args){
                
            }
        },
        book: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
            },
            resolve(parentValue, args){

            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parentValue, args) {

            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args){

            }
        }
    })
})