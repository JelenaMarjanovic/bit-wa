import React from 'react';
import { Link } from 'react-router-dom';

import { NAV_PATHS } from './../../shared/constants';

const MainMenu = () => (
    <ul className="right">
        {
            NAV_PATHS
                .map(({ path, title }, i) =>
                    <li key={i}>
                        <Link to={`/${path}`}>{title}</Link>
                    </li>
                )
        }
    </ul>
);

export { MainMenu };