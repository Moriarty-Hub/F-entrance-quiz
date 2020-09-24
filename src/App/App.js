import React, { Component } from 'react';
import './App.scss';
import Team from './team/Team';
import Trainee from './trainee/Trainee';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ungroupedTrainees: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/trainees?grouped=false")
      .then(response =>
        response.json()
      )
      .then(trainees=>{
        const value = trainees.map((trainee) => {
          return {
            id: trainee.id,
            name: trainee.name,
            office: trainee.office,
            email: trainee.email,
            github: trainee.github,
            zoomId: trainee.zoomId
          }
        })
        this.setState({
          ungroupedTrainees: value
        })
      })
  }

  render() {
    return (
      <div>
        <Team/>
        <Trainee ungroupedTrainees={this.state.ungroupedTrainees} />
      </div>
    );
  }
}

export default App;
