import axios from 'axios';

import { BASE_API_ENDPOINT } from './../shared/constants';
import { Post } from './../models/Post';

class PostService {
    fetchPosts() {
        const requestUrl = `${BASE_API_ENDPOINT}/posts`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                const postList = data.map(post => new Post(post));

                return postList;
            });
    }

    fetchPostDetails(postId) {
        const requestUrl = `${BASE_API_ENDPOINT}/posts/${postId}`;

        return axios.get(requestUrl)
            .then(({ data }) => {
                return new Post(data);
            });
    }

    fetchAuthorPosts(authorId) {
        const requestUrl = `${BASE_API_ENDPOINT}/posts`;

        const options = {
            params: {
                userId: authorId
            }
        };

        return axios.get(requestUrl, options)
            .then(({ data }) => {
                const postList = data.map(post => new Post(post));

                return postList;
            });
    }

    deliverNewPost(title, body) {
        const requestUrl = `${BASE_API_ENDPOINT}/posts`;

        const options = {
            method: 'POST',
            body: {
              title: title,
              body: body,
              userId: 1
            },
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }

        return axios.post(requestUrl, options)
            .then(({ data }) => console.log(data));
    }
}

export const postService = new PostService();