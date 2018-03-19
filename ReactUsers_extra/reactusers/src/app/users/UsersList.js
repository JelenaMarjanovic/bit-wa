import React from 'react';
import UserCard from './UserCard';
import UserItem from './UserItem';

const UsersList = (props) => {
    const { users, cardType } = props;

    const userCards = users.map((user, index) => <UserCard key={index} singleUser={user} />);
    const userItems = users.map((user, index) => <UserItem key={index} singleUser={user} />);

    return (
        <div className="row">
            <ul className="collection">
                {cardType ? userCards : userItems}
            </ul>
        </div>
    )
}

export default UsersList;