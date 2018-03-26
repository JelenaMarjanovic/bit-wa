import React, { Component } from 'react';

import { PostsList } from './PostsList';

class PostsPage extends Component {
    render() {
        return (
            <div>
                <h4 className="blue-text text-darken-4 center">POSTS</h4>
                <PostsList />
            </div>
        );
    }
}

export { PostsPage };