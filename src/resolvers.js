const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        //get user by login id
        GetUser: async (_, { login }, { dataSources, token }) => {
            const data = await dataSources.githubAPI.getAnyUser(login);
            return data;
        },

        //get all users
        GetAllUsers: async (_, __, { dataSources }) => {
            return await dataSources.githubAPI.getUsers();
        },

        //get any user repos
        GetAnyUserRepos: async (_, { login }, { dataSources }) => {
            return await dataSources.githubAPI.getAnyUserRepo(login);
        },

        //get the current logged in user
        GetCurrentUser: async (_, __, { dataSources }) => {
            return await dataSources.githubAPI.getCurrentUser();
        },

        GetCurrentUserEmails: async (_, __, { dataSources }) => {
            return await dataSources.githubAPI.getCurrentUserEmails();
        },

        GetFollowingUsers: async (_, __, { dataSources }) => {
            return await dataSources.githubAPI.getFollowingUsers();
        }
    },
    Mutation: {
        followUser: async (_, { username }, { dataSources }) => {
            const response = await dataSources.githubAPI.followAUser(username);
            return {
                message: "Followed",
                response: 200
            }
        },
        unfollowUser: async (_, { username }, { dataSources }) => {
            const response = await dataSources.githubAPI.unfollowUser(username);
            return {
                message: "Unfollowed",
                response: 200
            }
        }
    }
}

module.exports = resolvers;