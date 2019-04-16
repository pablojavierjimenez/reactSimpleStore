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
      <ul className="App_itemGallery__containes">
        <li>item gallery</li>
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
  age: PropTypes.number.isRequired
};

export default ProductItem;
