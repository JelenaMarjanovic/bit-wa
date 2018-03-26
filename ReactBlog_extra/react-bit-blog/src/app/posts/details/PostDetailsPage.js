import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';
import { PostsFromAuthor } from './PostsFromAuthor';

class PostDetailsPage extends Component {
    render() {
        return (
            <div className="blue-text text-darken-4">
                <Link to="/">
                    <button className="btn blue darken-4">
                        <i className="material-icons">keyboard_backspace</i>
                    </button>
                </Link>
                <div className="card-panel">
                    <h3 className="center">Post title</h3>
                    <PostAuthor />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi, officia earum possimus ea, minima sunt eum reiciendis modi, iste repellendus necessitatibus expedita quis porro. Porro facere omnis esse voluptatibus!
                    Enim possimus, reprehenderit tempora repudiandae nemo ipsum dicta ullam quod tempore rem perferendis deleniti illo maxime officia modi exercitationem nisi unde. Aspernatur cum enim a quae architecto nisi dolorum voluptatibus.
                    Ipsa perspiciatis maxime dolorum aut quaerat eveniet culpa, soluta obcaecati quidem aspernatur consequuntur eaque cupiditate deleniti quis ratione magni. Eveniet officia commodi voluptatibus dolore facilis possimus earum, quisquam exercitationem voluptas.</p>
                    <hr />
                    <PostsFromAuthor />
                </div>
            </div>
        );
    }
}

export { PostDetailsPage };