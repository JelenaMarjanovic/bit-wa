import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PostsPage } from './posts/PostsPage';
import { AuthorsPage } from './authors/AuthorsPage';
import {AboutPage} from './about/AboutPage';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </main>
);

export { Main };