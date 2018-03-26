import React from 'react';
import { Link } from 'react-router-dom';

const AuthorItem = () => (
    <Link to="/authors/:id">
        <div className="row">
            <div className="col s12">
                <div className="card blue darken-1 hoverable">
                    <div className="card-content white-text">
                        <span className="card-title">Name Surname</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

export { AuthorItem };