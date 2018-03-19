import React from 'react';
import UsersList from '../users/UsersList';

const Main = (props) => {
    const { data } = props;

    return (
        <div className="container">
            <div className="row">
                <UsersList users={data} />
            </div>
        </div>
    )
}

export default Main;