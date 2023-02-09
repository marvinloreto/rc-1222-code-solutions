import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isPaused: true };
    this.toggleTime = this.toggleTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  toggleTime() {
    const { isPaused } = this.state;
    if (isPaused) {
      this.time = setInterval(() =>
        this.setState({
          count: this.state.count + 1,
          isPaused: false
        }), 1000);
    } else {
      this.setState({ isPaused: true });
      clearInterval(this.time);

    }
  }

  resetTime() {
    const { isPaused } = this.state;
    if (isPaused) {
      this.setState({
        count: 0,
        isPaused: true
      });
    }
  }

  render() {
    const toggleButton = this.state.isPaused ? 'fa-play' : 'fa-pause';
    return (
      <div className="container">
        <div className="container-watch" onClick={ this.resetTime }>
          <h1>{ this.state.count }</h1>
        </div>
        <div className="button">
          <i className={ `fa-solid ${toggleButton}` } onClick={ this.toggleTime }></i>
        </div>
      </div>
    );
  }
}
