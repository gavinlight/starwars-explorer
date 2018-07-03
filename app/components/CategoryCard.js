import React from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  categoryName() {
    const { category } = this.props;
    return category && category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const { category } = this.props;
    const categoryName = this.categoryName();

    return (
      <span>
        <a href={category}>
          {categoryName}
        </a>
      </span>
    );
  }
}

export default CategoryCard;
