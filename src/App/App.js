import React, { Component } from 'react';
import logo from './Assets/logo-s.png';
import './App.scss';

// Componenets
import ProductList from './Components/productList/productList';
import ProductItem from './Components/productItem/productItem';
import ShoppingCart from './Components/shoppingCart/shoppingCart';

class App extends Component {
  constructor() {}
  render() {
    return (
      <div className="App">
        <header className="App_headerContent__container">
          <p>Escuela de sirenas</p>
          <img src={logo} className="App_logo" alt="logo" />
          <a
            className="App_link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="App_header_menuStick"></div>
            <div className="App_header_menuStick"></div>
            <div className="App_header_menuStick"></div>
          </a>
        </header>

        <main id="App_mainContent__container">
          <ProductList>
            <ProductItem/>
          </ProductList>
          <ShoppingCart/>
        </main>

        <footer id="App_footerContent__container">
          y este es el patero
        </footer>
      </div>
    );
  }
}

export default App;
