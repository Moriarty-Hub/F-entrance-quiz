import React, { Component } from 'react';
import './Team.scss';
import Item from './item/Item';

class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    }
  }

  onClick = () => {
    fetch("http://localhost:8080/teams")
      .then(response =>
        response.json()
      )
      .then(teams=>{
        const value = teams.map((team) => {
          return {
            teamName: team.teamName,
            students: team.students
          }
        })
      this.setState({
        teams: value
      })
    })
  }

  render() {
    return (
      <div className="team">
        <div className="header">
          <h3>分组列表</h3>
          <button type="button" onClick={this.onClick}>分组学员</button>
        </div>
        <div className="main">
          {this.state.teams.map((team) => (
            <Item key={team.teamName} teamName={team.teamName} students={team.students}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
