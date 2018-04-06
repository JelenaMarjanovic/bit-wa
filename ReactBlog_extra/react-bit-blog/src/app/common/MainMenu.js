import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import { NAV_PATHS } from './../../shared/constants';

import M from "materialize-css";

class MainMenu extends Component {
    componentDidMount = () => {
        const elem = document.querySelector('.sidenav');
        M.Sidenav.init(elem);
    }

    render() {
        return (
            <Fragment>
                <a data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                {/* Show only on medium and large devices */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        NAV_PATHS
                            .map(({ path, title }, i) =>
                                <li key={i}>
                                    <Link to={`/${path}`}>{title}</Link>
                                </li>
                            )
                    }
                </ul>
                {/* Show only on small devices */}
                <ul className="sidenav sidenav-close" id="mobile-demo">
                    {
                        NAV_PATHS
                            .map(({ path, title }, i) =>
                                <li key={i}>
                                    <Link to={`/${path}`}>{title}</Link>
                                </li>
                            )
                    }
                </ul>
            </Fragment>
        )
    };
}

export { MainMenu };