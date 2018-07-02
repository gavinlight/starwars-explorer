import React from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  getCategoryName() {
    const { category } = this.props;
    return category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const { category } = this.props;

    return (
      <span>
        <a href={category}>
          {this.getCategoryName()}
        </a>
      </span>
    );
  }
}

export default CategoryCard;
