import React, { Component } from 'react';
import './App.scss';
import Team from './team/Team';
import Student from './student/Student';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/students")
      .then(response =>
        response.json()
      )
      .then(students=>{
        const value = students.map((student) => {
          return {
            id: student.id,
            name: student.name
          }
        })
        this.setState({
          students: value
        })
      })
  }

  render() {
    return (
      <div>
        <Team/>
        <Student students={this.state.students} />
      </div>
    );
  }
}

export default App;
