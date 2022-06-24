const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const GithubAPI = require('./dataSources/github-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
        return {
            githubAPI: new GithubAPI(),
        };
    }
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
