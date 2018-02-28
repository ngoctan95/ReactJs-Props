import React, { Component } from 'react';

import './App.css';
import Product from './components/Product'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "1",
          name: "hang 1",
          price: "10000",
        }, {
          id: "2",
          name: "hang 2",
          price: "10000",
        }
        , {
          id: "3",
          name: "hang 3",
          price: "10000",
        }
      ],
      isActive: true
    }
  }

  onClickNewProduct = () => {
    console.log(this.refs.inputNewProduct.value);
    this.refs.inputNewProduct.value = "";
  }
  onClick = () => {
  
    var newProduct = {
      id: "4",
      name: "hang 4",
      price: "20000"
    }
    var array = this.state.products.slice();
    array.push(newProduct);
    this.setState({
      products: array
    });
  }
  render() {
    // var products = [
    //   {
    //     id: "1",
    //     name: "hang 1",
    //     price: "10000"
    //   }, {
    //     id: "2",
    //     name: "hang 2",
    //     price: "10000"
    //   }
    //   , {
    //     id: "3",
    //     name: "hang 3",
    //     price: "10000"
    //   }
    // ];
    let elements = this.state.products.map((item, index) => {
      return (
        <div key={index}>
          <Product
            name={item.name}
            price={item.price} />
        </div>
      )
    });
    let elements2 = this.state.products.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>
            <span className="label label-success">{item.price}</span>
          </td>
        </tr>
      );
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
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">      
                <div className="form-group">
                  <label >Thêm sản phẩm</label>
                  <input type="text" className="form-control" id="" placeholder="Nhập tên sản phẩm" ref="inputNewProduct"/>
              </div>
              
              <button type="button" className="btn btn-default" onClick={this.onClickNewProduct}>Lưu</button>
              
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div> */}

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Gía</th>
                </tr>
              </thead>
              <tbody>
                {elements2}
              </tbody>
            </table>

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
