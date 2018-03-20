import React from 'react';

const Header = (props) => {
    const { cardType } = props;

    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="" className="brand-logo center">Bit Persons</a>
                <ul className="right hide-on-med-and-down">
                    <li><a onClick={props.func}><i class="material-icons">{cardType ? "view_list" : "view_module"}</i></a></li>
                    <li><a ><i class="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;