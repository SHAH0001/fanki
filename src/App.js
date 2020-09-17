import React from 'react';
import './App.scss';
import './scss/vars.scss';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Staff from './components/Staff/Staff.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container clearfix">
          <Navbar />
          <div className="main-content">
            <Staff />
          </div>
      </div>
    </div>
  );
}

export default App;
