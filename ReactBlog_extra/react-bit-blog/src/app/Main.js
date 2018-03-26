import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PostsPage } from './posts/PostsPage';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
        </Switch>
    </main>
);

export { Main };