import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './partials/Main';
import Footer from './partials/Footer';
import usersData from '../data/users.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main data={usersData} />
        <Footer />
      </div>
    );
  }

}

export default App;