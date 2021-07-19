import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
import { BrowserRouter as Router } from 'react-router-dom'

render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>
)
ReactDOM.render(<App />, document.getElementById('root'));
