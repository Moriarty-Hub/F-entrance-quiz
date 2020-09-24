import React, { Component } from 'react';
import './Trainer.scss';
import 'antd/dist/antd.css'
import { Popover } from 'antd';

class Trainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="trainer">
        <div className="header">
          <h3>讲师列表</h3>
        </div>
        <div className="main">
          <ul>
            {this.props.ungroupedTrainers.map((trainer) => (
              <li key={trainer.id} className="trainer-item">
                <div>
                  <Popover content={`id: ${trainer.id}, name: ${trainer.name}`} trigger="hover">
                    {trainer.id}. {trainer.name}
                  </Popover>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Trainer;
