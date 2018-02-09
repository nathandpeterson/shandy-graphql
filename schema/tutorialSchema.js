const { graphql, buildSchema, GraphQLObjectType } = require('graphql')

const schema = buildSchema(`

    type Video {
        id: ID,
        title: String,
        duration: Int,
        watched: Boolean
    }

    type Query {
        video: Video
        videos: [Video]
    }
    type Schema {
        query: Query
    }`
)

const videoA = {
    id: '1', title: 'grapqhl-stuff', duration: 2143243, watched: false
}

const videoB = {
    id: '2', title: 'more-grapqhl-stuff', duration: 214223243, watched: false
}

const videos = [videoA, videoB]

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'A description can go here',
    fields: {
        video: {
            type: VideoType,
            resolve: () => new Promise(resolve => {
                resolve: ({
                    id: 'a',
                    title: 'wtf',
                    duration: 1032,
                    watched: true
                })
            })
        }
    }
})

const resolvers = {
    video: () => ({
        id: '1',
        title: 'foo',
        duration: 3943943,
        watched: false
    }),
    videos: () => videos
}

const query = `
    query myFirstQuery {
        videos {
            id
            title
            duration 
            watched
        }
      
    }`

graphql(schema, query, resolvers)
    .then(result => console.log(result))
    .catch(error => console.log('err:', error))