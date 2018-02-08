const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList } = require('graphql')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        books: {
            type: new GraphQLList(AlbumType),
            resolve(parentValue, args){
                return {message: 'hi'}
            }
        }
    })
})