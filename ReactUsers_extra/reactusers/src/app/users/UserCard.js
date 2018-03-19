import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
    const { singleUser } = props;

    return (
        <div className="col s12 m7 xl4">
            <div className="card">
                <div className="card-image">
                    <img src={singleUser.getPicture()} alt={singleUser.getName()} />
                    <span className="card-title">
                        {singleUser.getName()}
                    </span>
                </div>
                <div className="card-content">
                    <p>{singleUser.getDob()}</p>
                    <p>{singleUser.getEmail()}</p>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    singleUser: PropTypes.object.isRequired
}

UserCard.defaultProps = {
    singleUser: {}
}

export default UserCard;