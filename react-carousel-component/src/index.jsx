import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from './carousel';

const images = [
  {
    number: 1,
    img: '../images/001.png'
  },
  {
    number: 2,
    img: '../images/004.png'
  },
  {
    number: 3,
    img: '../images/007.png'
  },
  {
    number: 4,
    img: '../images/025.png'
  },
  {
    number: 5,
    img: '../images/039.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
