import React from 'react';
import './App.css';

import Header from './Components/Common/Header'
import Home from './Components/Home/Home'
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <div className="container">
      			<Home />
        </div>
    </div>
  );
}

export default App;
