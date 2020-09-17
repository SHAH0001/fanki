import React from 'react';
import './App.scss';
import './scss/vars.scss';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import MainContent from './components/MainContent/MainContent.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container-content">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
