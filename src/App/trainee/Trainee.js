import React, { Component } from 'react';
import './Trainee.scss';

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
              <li key={trainee.id} className="trainee-item">{trainee.id}. {trainee.name}</li>
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
