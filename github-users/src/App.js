import React from 'react';
import Header from './components/Header'
import User from './components/User'
import Friends from './components/Friends'
import userData from './data-user'
import dataFollowers from './data-followers'
//import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount() {
    // axios.get('https://api.github.com/users/mcelroyian')
    //   .then(res => {
    //     this.setState({
    //       user: res.data,
    //       followersUrl: res.data.followers_url,
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     debugger
    //   })
    this.setState({
      user: userData,
      followers: dataFollowers,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='body'>
        <Friends followers={this.state.followers}/>
        <User user={this.state.user}/>
        </div>
  
      </div>
    );
  }

}

export default App;
