import React, { Component } from 'react';
import './Student.scss';

class Student extends Component {

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
          </ul>
        </div>
      </div>
    );
  }
}

export default Student;
