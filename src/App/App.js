import React, { Component } from 'react';
import './App.scss';

// Componenets
import Header from './Components/header/header';
import ProductList from './Components/productList/productList';
import ProductItem from './Components/productItem/productItem';
import ShoppingCart from './Components/shoppingCart/shoppingCart';

class App extends Component {

  render() {
    return (
      <body class="has-navbar-fixed-top">
        <div className="App is-desktop">
          <Header/>
          <nav class="App_headerContent__container navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                {
                  // <img src={logo} className="App_logo" alt="logo" />
                }
              </a>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item">
                  Home
                </a>

                <a class="navbar-item">
                  Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      About
                    </a>
                    <a class="navbar-item">
                      Jobs
                    </a>
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>


          <main className="is-desktop is-full">
            <section id="App_itemGallery__containes" className="column is-9 is-two-thirds">
              <ul className="App_itemGallery__containes columns">
                <li className="section column is-half">
                  <article className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg" alt="collar 617-2637"/>
                      </figure>
                    </div>
                    <div className="card-content">

                      <div className="media">
                        <p className="media-content">
                          <span className="subtitle is-6">código: </span>
                          <span className="title is-4"><b>617-2637</b></span>
                        </p>
                      </div>

                      <div className="content">
                        <div class="producto-form">
                          <div class="producto-form-texto">
                            <div>código: <b>617-2637</b></div>
                            <div>precio x unidad: <b><span>$ 298</span></b></div>
                            <div>pack x 2 unidades: <b>$596</b></div>
                          </div>
                          <div class="producto-form-boton">
                            <fieldset>
                              <input type="hidden" name="jcartToken" value=""/>
                              <input type="hidden" name="my-item-id" value="617-2637"/>
                              <input type="hidden" name="my-item-name" value="collar"/>
                              <input type="hidden" name="my-item-price" value="298"/>
                              <input type="hidden" name="my-item-qty" value="2" size="3"/>
                              <input type="hidden" name="my-item-url" value="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg"/>
                              <input type="submit" name="my-add-button" value="comprar" class="button"/>
                            </fieldset>
                          </div>
                        </div>
                      </div>

                    </div>
                  </article>
                </li>

                <li className="section column is-half">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg" alt="collar 617-2637"/>
                      </figure>
                    </div>
                    <div className="card-content">

                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>

                      <div className="content">
                        <div class="producto-form">
                          <div class="producto-form-texto">
                            <div>código: <b>617-2637</b></div>
                            <div>precio x unidad: <b><span>$ 298</span></b></div>
                            <div>pack x 2 unidades: <b>$596</b></div>
                          </div>
                          <div class="producto-form-boton">
                            <fieldset>
                              <input type="hidden" name="jcartToken" value=""/>
                              <input type="hidden" name="my-item-id" value="617-2637"/>
                              <input type="hidden" name="my-item-name" value="collar"/>
                              <input type="hidden" name="my-item-price" value="298"/>
                              <input type="hidden" name="my-item-qty" value="2" size="3"/>
                              <input type="hidden" name="my-item-url" value="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg"/>
                              <input type="submit" name="my-add-button" value="comprar" class="button"/>
                            </fieldset>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>

                <li className="section column is-half">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg" alt="collar 617-2637"/>
                      </figure>
                    </div>
                    <div className="card-content">

                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>

                      <div className="content">
                        <div class="producto-form">
                          <div class="producto-form-texto">
                            <div>código: <b>617-2637</b></div>
                            <div>precio x unidad: <b><span>$ 298</span></b></div>
                            <div>pack x 2 unidades: <b>$596</b></div>
                          </div>
                          <div class="producto-form-boton">
                            <fieldset>
                              <input type="hidden" name="jcartToken" value=""/>
                              <input type="hidden" name="my-item-id" value="617-2637"/>
                              <input type="hidden" name="my-item-name" value="collar"/>
                              <input type="hidden" name="my-item-price" value="298"/>
                              <input type="hidden" name="my-item-qty" value="2" size="3"/>
                              <input type="hidden" name="my-item-url" value="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg"/>
                              <input type="submit" name="my-add-button" value="comprar" class="button"/>
                            </fieldset>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>

                <li className="section column is-half">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg" alt="collar 617-2637"/>
                      </figure>
                    </div>
                    <div className="card-content">

                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>

                      <div className="content">
                        <div class="producto-form">
                          <div class="producto-form-texto">
                            <div>código: <b>617-2637</b></div>
                            <div>precio x unidad: <b><span>$ 298</span></b></div>
                            <div>pack x 2 unidades: <b>$596</b></div>
                          </div>
                          <div class="producto-form-boton">
                            <fieldset>
                              <input type="hidden" name="jcartToken" value=""/>
                              <input type="hidden" name="my-item-id" value="617-2637"/>
                              <input type="hidden" name="my-item-name" value="collar"/>
                              <input type="hidden" name="my-item-price" value="298"/>
                              <input type="hidden" name="my-item-qty" value="2" size="3"/>
                              <input type="hidden" name="my-item-url" value="http://sirenasxmayor.com.ar/img/productos/mini/617-2637.jpg"/>
                              <input type="submit" name="my-add-button" value="comprar" class="button"/>
                            </fieldset>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <aside id="App_shoppingCart__container" className="section column is-one-quarter">
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
      </body>
    );
  }
}

export default App;
