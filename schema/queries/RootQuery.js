const graphql = require('graphql')
const { GraphQLObjectType,
        GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        GraphQLNonNull } = graphql

const BookType = require('../types/BookType')
const AuthorType = require('../types/AuthorType')
const TextType = require('../types/TextType')
const FrequencyType = require('../types/FrequencyType')

const BookModel = require('../../models/BookModel')
const AuthorModel = require('../../models/AuthorModel')
const TextModel = require('../../models/TextModel')


module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({

        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parentValue, args) {
                return AuthorModel.getAll()
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
            },
            resolve(parentValue, {id} ){
                return AuthorModel.getOne(id)
            }
        },
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
        text: {
          type: TextType,
          args: {
            id: { type: new GraphQLNonNull(GraphQLID)},
            paragraphNumber: { type : GraphQLInt}
          },
          resolve(parentValue, args){
            return TextModel.getFragment('path',args.paragraphNumber)
          }
        },
        frequencies: {
          type: FrequencyType,
          args: {
            text_id: { type: new GraphQLNonNull(GraphQLID)},
            startingParagraph: { type : GraphQLInt},
            endingParagraph: { type : GraphQLInt},
          },
          resolve(parentValue, args) {
            const {text_id, startingParagraph, endingParagraph} = args
            return BookModel.getOne(args.text_id)
              .then(bookData => {
                const { file } = bookData
                return TextModel.returnFrequencies(file, startingParagraph, endingParagraph)
                  .then(end => {
                    console.log('end- ------ -', end)
                    return end
                  })
              })
          }
        }

    })
})
