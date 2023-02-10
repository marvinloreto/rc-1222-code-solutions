import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const hamburger = this.state.isOpen ? 'hidden' : 'fa-solid fa-bars';
    const toggleMenu = this.state.isOpen ? 'menu' : 'hidden';
    const modalBackground = this.state.isOpen ? 'grey' : 'hidden';
    return (
      <div className="container">
        <div className="button">
          <i className={hamburger} onClick={this.handleClick}></i>
        </div>
        <div className={toggleMenu}>
          <h1>Menu</h1>
          <ul>
            <li onClick={this.handleClick}>About</li>
            <li onClick={this.handleClick}>Get Started</li>
            <li onClick={this.handleClick}>Sign In</li>
          </ul>
        </div>
        <div className={modalBackground} onClick={this.handleClick}>
        </div>
      </div>
    );
  }
}
