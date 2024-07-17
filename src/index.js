import React from 'react';
import { render } from 'react-snapshot';

import App from './App';
import './index.css';

window.location.href = 'https://www.instagram.com/enercseproyecta/';

render(
  <App />,
  document.getElementById('root')
);