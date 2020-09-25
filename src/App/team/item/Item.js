import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
  render() {
    return (
      // TODO class命名过于笼统
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
                {/* TODO table相关内容不要和list混用 */}
                <ul className="student-list">
                  {this.props.students.map((student) => (
                    <li key={student.id} className="student-item">
                      {student.id}. {student.name}
                    </li>
                  ))}
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
