const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLID, 
        GraphQLString,
        GraphQLNonNull } = graphql

const BookType = require('../types/BookType')
const AuthorType = require('../types/AuthorType')

const BookModel = require('../../models/BookModel')
const AuthorModel = require('../../models/AuthorModel')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue){
                return BookModel.getAll()
            }
        },
        book: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
            },
            resolve(parentValue, {id}){
                return BookModel.getOne(id)
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parentValue, args) {
                return AuthorModel.getAll()
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, {id} ){
                return AuthorModel.getOne(id)
            }   
        }
    })
})