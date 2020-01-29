// default import
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root'),
);
