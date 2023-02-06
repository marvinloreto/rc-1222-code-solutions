import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(props) {
  return (
    <button type="button">Click Me!</button>
  );
}

const button = <CustomButton/>;

const container = document.querySelector('#root');

const root = ReactDom.createRoot(container);

root.render(button);
