import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: 1
    };
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.carousel = this.carousel.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  carousel() {
    this.intervalId = setInterval(() => {
      if (this.state.displayImage === 5) {
        this.setState({ displayImage: 1 });
      } else {
        this.setState({ displayImage: this.state.displayImage + 1 });
      }
    }, 3000);
  }

  handleArrowClick(event) {
    if (event.target.className.includes('fa-chevron-right')) {
      if (this.state.displayImage !== 5) {
        this.setState({ displayImage: this.state.displayImage + 1 });
      } else {
        this.setState({ displayImage: 1 });
      }
    } else if (event.target.className.includes('fa-chevron-left')) {
      if (this.state.displayImage !== 1) {
        this.setState({ displayImage: this.state.displayImage - 1 });
      } else {
        this.setState({ displayImage: 5 });
      }
    }
    clearInterval(this.intervalId);
    this.carousel();
  }

  handleCircleClick(event) {
    if (event.target.className.includes('fa-circle')) {
      this.setState({ displayImage: Number(event.target.number) });
    }
    clearInterval(this.intervalId);
    this.carousel();
  }

  render() {
    const imageSrc = this.props.images;
    const imageArray = imageSrc.map(img => {
      const display = this.state.displayImage === img.number ? '' : 'hidden';
      return <img key={img.number} className={display} src={img.img}></img>;
    });
    const circles = imageSrc.map(img => {
      const selected = this.state.displayImage === img.number ? 'fa-solid fa-circle' : 'fa-regular fa-circle';
      return <i key={img.number} data-id={img.number} className={selected}></i>;
    });
    return (
      <div className="container-carousel">
        <div className="row" onClick={this.handleArrowClick}>
          <div className="column-full">
            <i className='fa-solid fa-chevron-left'></i>
            {imageArray}
            <i className='fa-solid fa-chevron-right'></i>
          </div>
        </div>
        <div className="row" onClick={this.handleCircleClick}>
          <div className="column-full circle">
            {circles}
          </div>
        </div>
      </div>
    );
  }
}
