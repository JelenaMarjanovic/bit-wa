import React, { Component } from 'react';

class PostsFromAuthor extends Component {
    render() {
        return (
            <div className="blue-text text-darken-4">
                <h5>3 more posts from same author</h5>
                <p>First post</p>
                <p>Second post</p>
                <p>Third post</p>
            </div>
        );
    }
}

export { PostsFromAuthor };