import React from 'react';
import Header from './components/Header'
import User from './components/User'
import Friends from './components/Friends'
import userData from './data-user'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      friends: '',
    }
  }

  componentDidMount() {
    this.setState({user: userData})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='body'>
        <Friends />
        <User user={this.state.user}/>
        </div>
  
      </div>
    );
  }

}

export default App;
