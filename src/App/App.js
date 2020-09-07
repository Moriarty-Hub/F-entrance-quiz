import React, { Component } from 'react';
import './App.scss';
import Team from './team/Team';
import Student from './student/Student';

class App extends Component {
  render() {
    return (
      <div>
        <Team/>
        <Student/>
      </div>
    );
  }
}

export default App;
