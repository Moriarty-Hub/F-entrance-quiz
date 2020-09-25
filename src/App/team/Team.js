import React, { Component } from 'react';
import './Team.scss';
import Item from './item/Item';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  // TODO方法命名更加具体
  onClick = () => {
    // TODO 这里没有更新api teams => groups
    fetch('http://localhost:8080/groups')
      .then((response) => response.json())
      .then((teams) => {
        // TODO 不要耦合api请求与转换逻辑，且可以从api设计层面去掉下面代码
        const value = teams.map((team) => {
          // TODO 可以使用解构和object简介表达式改造以下代码
          return {
            teamName: team.teamName,
            students: team.students,
          };
        });
        this.setState({
          teams: value,
        });
      });
  };

  render() {
    return (
      <div className="team">
        {/* TODO 尝试使用语义化标签 */}
        <div className="header">
          <h3>分组列表</h3>
          <button type="button" onClick={this.onClick}>
            分组学员
          </button>
        </div>
        <div className="main">
          {this.state.teams.map((team) => (
            <Item key={team.teamName} teamName={team.teamName} students={team.students} />
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
