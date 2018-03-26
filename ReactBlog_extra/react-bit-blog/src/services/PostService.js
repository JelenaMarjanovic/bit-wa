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

    }
}

export const postService = new PostService();