import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './productItem.scss';

class ProductItem extends Component {
  /**
   * @class Home
   * @classdesc is a main application tag container
   * @constructor to learn about constructor documentation Go...
   *              *reactjs:* https://reactjs.org/docs/react-component.html#constructor
   *              *mozilla:* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor
   * @property {object} this.props
   * @example this.props= {
   *    name: {string},
   *    initialAge: {number},
   *    user: {
   *      name: {string},
   *      hobbies: {Array}
   *    };
   * @implements <ProductItem name={"Chaboncito"} initialAge={27} user={user}/>
   */
  constructor(props) {
      super();
      this.state = {
          age: props.initialAge,
          status: 0
      };
  }
  render() {
    return (
      <ul className="App_itemGallery__containes columns">
              <li className="section is-half">
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

              <li className="section is-half">
                otro item
              </li>
            </ul>
    )
  }
}
/**
 * @description hay que estar bien seguro que los valores declarados
 * no van a cambiar luego de tipo.
 */
ProductItem.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default ProductItem;
