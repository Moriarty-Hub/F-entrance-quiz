import React, { Component } from 'react';
import './Student.scss';

class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputField: ''
    };
  }

  onSubmit = () => {
    fetch("http://localhost:8080/students" , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `${this.state.inputField}`,
    });
  }

  onChange = (event) => {
    this.setState({
      inputField: event.target.value
    })
  }

  render() {
    return (
      <div className="student">
        <div className="header">
          <h3>学员列表</h3>
        </div>
        <div className="main">
          <ul>
            {this.props.students.map((student) => (
              <li key={student.id} className="student-item">{student.id}. {student.name}</li>
            ))}
            <li>
              <form onSubmit={this.onSubmit}>
                <input type="text" name="studentName" onChange={this.onChange}/>
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Student;
