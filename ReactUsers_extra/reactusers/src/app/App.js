import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './partials/Main';
import Footer from './partials/Footer';
import { userService } from '../services/UserServices';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersData: [],
      viewType: 0
    }
  }

  changeState = () => {
    this.setState({ viewType: (this.state.viewType) ? 0 : 1 })
  }

  componentDidMount() {
    userService.getUsers().then((result) => {
      this.setState({ usersData: result })
    });
  }

  render() {
    return (
      <div>
        <Header func={this.changeState} />
        <Main data={this.state.usersData} cardType={this.state.viewType} />
        <Footer />
      </div>
    );
  }
}

export default App;