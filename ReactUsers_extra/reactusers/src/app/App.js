import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './partials/Main';
import Footer from './partials/Footer';
import {userService} from '../services/UserServices'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      usersData:[]
    }
  }

  componentDidMount() {
      userService.getUsers().then((result) => {
      this.setState({usersData:result})
    });
    
    
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