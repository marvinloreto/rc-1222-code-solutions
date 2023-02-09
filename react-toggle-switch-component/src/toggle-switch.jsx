import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="display-off">
          <button className="switchedOn" onClick={this.handleClick}>ON</button>
        </div>
      );
    } else {
      return (
        <div className="display-on">
          <button className="switchedOff" type="checkbox" onClick={this.handleClick}>OFF</button>
        </div>

      );
    }
  }
}
