import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PostsPage } from './posts/PostsPage';
import { AuthorsPage } from './authors/AuthorsPage';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/authors" component={AuthorsPage} />
        </Switch>
    </main>
);

export { Main };