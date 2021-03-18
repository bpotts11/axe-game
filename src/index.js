import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import AxeGame from './AxeGame';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AxeGame />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

