import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

    metaData: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),

    relatedData: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    metaData: [],
    relatedData: [],
  }

  categoryName() {
    const { category } = this.props;
    return category && category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const {
      category, title, metaData, relatedData,
    } = this.props;

    return (
      <span>
        {category}
        {title}
        {JSON.stringify(metaData)}
        {JSON.stringify(relatedData)}
      </span>
    );
  }
}

export default Card;
