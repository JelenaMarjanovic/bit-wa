import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthorInfo } from './AuthorInfo';
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';

class AuthorDetailsPage extends Component {
    render() {
        return (
            <div>
                <Link to="/authors">
                    <button className="btn blue darken-4">
                        <i className="material-icons">keyboard_backspace</i>
                    </button>
                </Link>
                <AuthorInfo />
                <AuthorAddress />
                <AuthorCompany />
            </div>
        );
    }
}

export { AuthorDetailsPage };