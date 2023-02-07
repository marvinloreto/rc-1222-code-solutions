import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { number: 0 };
  }

  handleClick() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    const numClick = this.state.number;
    if (numClick < 4) {
      return (
        <button className="cold" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (numClick < 7) {
      return (
        <button className="cool" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (numClick < 10) {
      return (
        <button className="tepid" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (numClick < 13) {
      return (
        <button className="warm" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (numClick < 16) {
      return (
        <button className="hot" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (numClick >= 16) {
      return (
        <button className="nuclear" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}
