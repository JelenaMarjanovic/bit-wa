import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './partials/Main';
import Footer from './partials/Footer';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      usersData:[]
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=15')
    .then((result) => {
      const users = result.data.results;
      this.setState({usersData:users})
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.usersData} />
        <Footer />
      </div>
    );
  }

}

export default App;