import React from 'react';
import './App.scss';
import './scss/vars.scss';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Staff from './components/Staff/Staff.jsx';
import Cards from './components/Cards/Cards.jsx';
import EventWaterfall from './components/EventWaterfall/EventWaterfall.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container clearfix">
          <Navbar />
          <div className="main-content">
            <Staff />
            <Cards />
            <div className="event-waterfall-and-notifications">
              <EventWaterfall />
            </div>
          </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
