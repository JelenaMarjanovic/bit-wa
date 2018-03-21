import React from 'react';
import UsersList from '../users/UsersList';
import PropTypes from 'prop-types';
import Search from './Search';

const Main = (props) => {
    const { data, cardType, changeValue } = props;

    return (
        <div className="container">
            <div className="row">
                <Search changeValue={changeValue} />
                <UsersList users={data} cardType={cardType} />
            </div>
        </div>
    )
}

Main.propTypes = {
    data: PropTypes.array.isRequired
}

export default Main;