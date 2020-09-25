import React, { Component } from 'react';
import './App.scss';
// TOOD 一般写 BrowserRouter as Router
import { BrowserRouter, Route } from 'react-router-dom';
import Team from './team/Team';
import Trainee from './trainee/Trainee';
import Trainer from './trainer/Trainer';
import CreateTraineePage from './createTrainee/CreateTraineePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ungroupedTrainees: [],
      ungroupedTrainers: [],
    };
  }

  componentDidMount() {
    // TODO 请求可以抽象请求层到utils中
    fetch('http://localhost:8080/trainees?grouped=false')
      .then((response) => response.json())
      .then((trainees) => {
        const value = trainees.map((trainee) => {
          return {
            id: trainee.id,
            name: trainee.name,
            office: trainee.office,
            email: trainee.email,
            github: trainee.github,
            zoomId: trainee.zoomId,
          };
        });
        this.setState({
          ungroupedTrainees: value,
        });
      });

    fetch('http://localhost:8080/trainers?grouped=false')
      .then((response) => response.json())
      .then((trainers) => {
        const value = trainers.map((trainer) => {
          return {
            id: trainer.id,
            name: trainer.name,
          };
        });
        this.setState({
          ungroupedTrainers: value,
        });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {/* TODO 添加 Swicth 标签 */}
          {/* TODO 划分路由不清，Team，Trainer，Trainee应该归为另一个路由，如对应CreateTraineePage */}
          <Team />
          <Trainer ungroupedTrainers={this.state.ungroupedTrainers} />
          <Trainee ungroupedTrainees={this.state.ungroupedTrainees} />
          <Route exact path="/trainee/create" component={CreateTraineePage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
