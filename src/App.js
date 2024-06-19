import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="circle bottom-left"></div>
        <div className="circle bottom-right"></div>
        <Header />
        <Banner />
        <Items />
      </div>
    </div>
  );
}

export default App;
