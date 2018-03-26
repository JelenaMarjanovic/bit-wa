import React, { Component } from 'react';

import { AuthorsList } from './AuthorsList';

class AuthorsPage extends Component {
    render() {
        return (
            <div>
                <h4 className="blue-text text-darken-4 center">AUTHORS</h4>
                <AuthorsList />
            </div>
        );
    }
}

export { AuthorsPage };