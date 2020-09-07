import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {

  render() {
    return (
      <div className="item">
        <table>
          <thead>
            <tr>
              <th>{this.props.teamName}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul className="student-list">
                {this.props.students.map((student => (
                  <li key={student.id} className="student-item">{student.id}. {student.name}</li>
                )))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Item;
