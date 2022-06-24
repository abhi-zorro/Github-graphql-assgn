const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        login: String!
        id: ID!
        node_id: String!
        avatar_url: String!
        url: String
        html_url: String
        repos_url: String
        type: String
        site_admin: Boolean
        bio: String
    }

    type Plan {
        name: String
        space: Int
        collaborators: Int
        private_repos: Int
    }

    type Repo {
        id: String
        name: String
        owner: User
        forks_count: Int
        license: String
        private: Boolean
        language: String
        description: String
    }

    type Email {
        email: String
        primary: Boolean
        verified: Boolean
        visibility: String
    }

    type Response {
        message: String
        response: Int
    }

    type Query {
        GetUser(login: String): User
        GetCurrentUser: User
        GetAllUsers: [User]
        GetAnyUserRepos(login: String): [Repo]
        GetCurrentUserEmails: [Email]
        GetFollowingUsers: [User]
    }

    type Mutation {
        followUser(username: String): Response
        unfollowUser(username: String): Response
    }
`

module.exports = typeDefs