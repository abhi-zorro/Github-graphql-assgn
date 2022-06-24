const { RESTDataSource } = require('apollo-datasource-rest');
const JWT_TOKEN = require('../constants');
class GithubAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Token ${JWT_TOKEN}`);
    }

    getUsers() {
        return this.get('users');
    }

    getCurrentUser() {
        return this.get('user');
    }

    getAnyUser(loginId) {
        return this.get(`users/${loginId}`);
    }

    getAnyUserRepo(loginId) {
        return this.get(`users/${loginId}/repos`);
    }

    getCurrentUserEmails() {
        return this.get('user/emails');
    }

    getFollowingUsers() {
        return this.get('user/following');
    }

    followAUser(username) {
        return this.put(`user/following/${username}`, {
            username
        });
    }

    unfollowUser(username) {
        return this.delete(`user/following/${username}`, {
            username
        });
    }
}

module.exports = GithubAPI;