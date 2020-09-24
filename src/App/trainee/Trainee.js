import React, { Component } from 'react';
import './Trainee.scss';
import { Popover } from 'antd';

class Trainee extends Component {

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
      <div className="trainee">
        <div className="header">
          <h3>学员列表</h3>
        </div>
        <div className="main">
          <ul>
            {this.props.ungroupedTrainees.map((trainee) => (
              <li key={trainee.id} className="trainee-item">
                <div>
                  <Popover content={`id: ${trainee.id}, name: ${trainee.name}, 
                  office: ${trainee.office}, email: ${trainee.email}, 
                  github: ${trainee.github}, zoomId: ${trainee.zoomId}`} trigger="hover">
                    {trainee.id}. {trainee.name}
                  </Popover>
                </div>
              </li>
            ))}
            <li>
              <form onSubmit={this.onSubmit}>
                <input type="text" name="traineeName" onChange={this.onChange}/>
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Trainee;
