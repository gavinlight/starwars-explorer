import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

    meta_data: PropTypes.arrayOf( PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }) ),

    related_data: PropTypes.arrayOf( PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }) ),
  };

  categoryName() {
    const { category } = this.props;
    return category && category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const { category, title } = this.props;
    // const categoryName = this.categoryName();

    return (
      <span>
        <h1>{title}</h1>
        <a href="#test">
          {category}
        </a>
      </span>
    );
  }
}

export default Card;
