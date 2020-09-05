import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

//! coms
import Navbar from './layout/navbar/Navbar';
import FirstMainCardContainer from './coms/_1-main-card-container/FirstMainCardContainer'
// import SecondMainCardContainer from './coms/_2-main-card-container/SecondMainCardContainer'
import ThirdMainCardContainer from './coms/_3-main-card-container/ThirdMainCardContainer'
import FourthMainCardContainer from './coms/_4-main-card-container/FourthMainCardContainer'
// import FifthMainCardContainer from './coms/_5-main-card-container/FifthMainCardContainer'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      {/* nav + cover-page */}
      <FirstMainCardContainer />
      {/* <SecondMainCardContainer /> */}
      <ThirdMainCardContainer />
      <FourthMainCardContainer />
      {/* <FifthMainCardContainer /> */}
      <Switch>
        <Route></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
