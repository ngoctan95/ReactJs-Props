import React, { Component } from 'react';

import './App.css';
import Product from './components/Product'
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Title</a>
          </div>
        </nav>

        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Product
                name="gia tri"
                price="15000" />
              <Product
                name="gia tri"
                price="10000" />
              <Product
                name="gia tri"
                price="15000" />
              <Product
                name="gia tri"
                price="10000" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
