import React from 'react';
import Header from './components/Header'
import User from './components/User'
import Friends from './components/Friends'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
      <Friends />
      <User />
      </div>

    </div>
  );
}

export default App;
