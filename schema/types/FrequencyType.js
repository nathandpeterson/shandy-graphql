const graphql = require('graphql')
const { GraphQLObjectType,
        GraphQLList,
        GraphQLString,
        GraphQLID } = require('graphql')

const FrequencyType = new GraphQLObjectType({
    name: 'FrequencyType',
    fields: () => ({
        id: { type : GraphQLID },
        text: { type: GraphQLString }
    })
})

module.exports = FrequencyType
