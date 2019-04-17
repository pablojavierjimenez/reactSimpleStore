import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../Assets/logo-s.png';
import './header.scss';

class Header extends Component {
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
   * @implements <header name={"Chaboncito"} initialAge={27} user={user}/>
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
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
    </header>
    )
  }
}
/**
 * @description hay que estar bien seguro que los valores declarados
 * no van a cambiar luego de tipo.
 */
Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default Header;
