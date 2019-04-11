import React, { Component } from 'react';
import logo from './Assets/logo-s.png';
import './App.scss';

class App extends Component {
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
          <section id="App_itemGallery__containes">
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
            <h1>item gallery</h1>
          </section>
          <aside id="App_shoppingCart__container">
            <section id="App_shoppingCart_itemList">
              <h4>ite compra</h4>
              <h4>ite compra</h4>
              <h4>ite compra</h4>
              <h4>ite compra</h4>
              <h4>ite compra</h4>
            </section>
            <section id="App_shoppingCart_totalAmount">
              12345
            </section>
          </aside>
        </main>

        <footer id="App_footerContent__container">
          y este es el patero
        </footer>
      </div>
    );
  }
}

export default App;
