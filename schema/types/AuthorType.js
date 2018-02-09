const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const BookType = require('./BookType')
const BookModel = require('../../models/BookModel')


const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type : GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        // books: { type: new GraphQLList(BookType), 
        //     resolve(parentValue, args){
        //         console.log(parentValue, args)
        //         return BookModel.getAll()
        //     }
        // }
    })
})

module.exports = AuthorType