import React from 'react';
import './Container.css';
import Header from '../Header/Header.js';
import Section1 from '../Section1/Section1.js';
import Section2 from '../Section2/Section2.js';
import Section3 from '../Section3/Section3.js';
import Footer from '../Footer/Footer.js';


export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-main">
        <Header />
        <div className="content-n-footer">
          <div className="wrapper">
            <Section1 />
            <Section2 />
            <Section3 />
          </div>
          <Footer />
        </div>
      </div>


    )
  }




}