import React from 'react';

const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="" className="brand-logo center">React Users</a>
                <ul className="right hide-on-med-and-down">
                    <li><a onClick={props.func} className="waves-effect waves-light btn">Change View</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;