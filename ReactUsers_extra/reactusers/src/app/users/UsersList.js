import React from 'react';
import UserItem from './UserItem';
import {userService} from '../../services/UserServices';

const UsersList = (props) => {
    const { users } = props;

    const listOfUsers = userService.getUsers(users);
    const userItems = listOfUsers.map((user, index) => <UserItem key={index} singleUser={user} />);

    return (
        <div className="row">
            <ul className="collection">
                {userItems}
            </ul>
        </div>
    )
}

export default UsersList;