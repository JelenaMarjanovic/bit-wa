import React, { Component, Fragment } from 'react';

import { Header } from './common/Header';
import { Main } from './Main';
import { Footer } from './common/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export { App };