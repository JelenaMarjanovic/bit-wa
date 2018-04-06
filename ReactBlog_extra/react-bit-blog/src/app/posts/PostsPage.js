import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { PostsList } from './PostsList';
import { postService } from './../../services/PostService';

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postService.fetchPosts()
            .then(posts => {
                this.setState({ posts });
            });
    }

    render() {
        return (
            <Fragment>
                <h4 className="blue-text text-darken-4 center">POSTS</h4>
                <Link to="/new">
                    <button className="btn blue darken-4 add-button">
                        <i className="material-icons">add</i>
                    </button>
                </Link>
                <PostsList posts={this.state.posts} />
            </Fragment>
        );
    }
}

export { PostsPage };