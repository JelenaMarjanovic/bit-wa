import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {
    const { users } = props;
    
    const userItems = users.map((user, index) => <UserItem key={index} singleUser={user} />);

    return (
        <div className="row">
            <ul className="collection">
                {userItems}
            </ul>
        </div>
    )
}

export default UsersList;