import React from 'react';
import './App.css';
import Main from '../main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  //simply react route to either main or blog
  //have header in app - displays contact info about me
  return (
    <div className="App">
      <h1>Jashan Brar</h1>
      <Main/>
    </div>
  );
}

export default App;
