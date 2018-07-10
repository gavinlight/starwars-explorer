import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/images/star-wars-logo.png';

const Page = ({ title, children }) => {
  return (
    <div>
      <header>
        <img src={logo} alt="Star Wars Logo" />
        <h1>{ title }</h1>
      </header>
      { children }
      <footer>
        <p>Made by <a href="https://github.com/gavinlight">Gavin Ligthart</a></p>
      </footer>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  title: 'Star Wars Explorer',
  children: null,
};

export default Page;
