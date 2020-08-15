import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
//! styled-components

//! coms
import Navbar from './layout/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
   
      <Switch>
        <Route></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
