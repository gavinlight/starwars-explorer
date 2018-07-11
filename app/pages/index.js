import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => {
  return (
    <div>
      <header>
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
