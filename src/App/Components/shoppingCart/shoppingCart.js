import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './shoppingCart.scss';

class ShoppingCart extends Component {
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
   * @implements <ShoppingCart name={"Chaboncito"} initialAge={27} user={user}/>
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
    )
  }
}
/**
 * @description hay que estar bien seguro que los valores declarados
 * no van a cambiar luego de tipo.
 */
ShoppingCart.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default ShoppingCart;
