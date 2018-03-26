import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostAuthor extends Component {
    render() {
        return (
            <Link to="/authors/:id">
                <div className="center">
                    Author Name
                </div>
            </Link>
        );
    }
}

export { PostAuthor };