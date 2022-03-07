import './App.css';
import React from 'react';
import Navigator from './components/Navigator'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700;800&display=swap" rel="stylesheet"/>
        <Header/>
        <Navigator/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
