import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation/Navigation.js";
import Header from './components/Header/Header.js';
import InpageNav from './components/InpageNav/InpageNav.js';
import Content from './components/Content/Content.js';
import Additions from './components/Additions/Additions.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container-main">
        <Header />
        <div className="content-n-footer">
          <div className="wrapper">
            <InpageNav />
            <Content />
            <Additions />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;