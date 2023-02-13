import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === this.state.isClicked) {
      this.setState({ isClicked: null });
    } else {
      this.setState({ isClicked: event.target.id });
    }
  }

  render() {
    const array = this.props.languages;
    const arrayDisplay = array.map(languages => {
      const toggleDisplay = this.state.isClicked === languages.number ? 'content' : 'content hidden';
      return (
        <div className="container" key={languages.number}>
          <div className="title" id={languages.number} onClick={this.handleClick}>
            {languages.name}
          </div>
          <div className={toggleDisplay}>
            {languages.content}
          </div>
        </div>
      );
    });
    return (
      arrayDisplay
    );
  }
}
