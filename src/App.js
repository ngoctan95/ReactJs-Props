import React, { Component } from 'react';

import './App.css';
import Product from './components/Product'
class App extends Component {
  onClick(){
    alert("Clicked me")
  }
  render() {
    var products = [
      {
        id: "1",
        name: "hang 1",
        price: "10000"
      }, {
        id: "2",
        name: "hang 2",
        price: "10000"
      }
      , {
        id: "3",
        name: "hang 3",
        price: "10000"
      }
    ];
    let elements = products.map((item, index) => {
      return (
        <div key={index}>
          <Product
            name={item.name}
            price={item.price} />
        </div>
      )
    });
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
              {elements}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <button type="button" className="btn btn-warning"
                      onClick={this.onClick}>Click me</button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
