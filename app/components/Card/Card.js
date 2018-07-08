import React from 'react';
import PropTypes from 'prop-types';

import MetaData from './Details/MetaData';
import RelatedData from './Details/RelatedData';

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
      <article>
        <h1>{title}</h1>
        <h2>{category}</h2>

        <ul>
          { metaData.map(meta => (
            <li key={`${meta.name}-${meta.value}`}>
              <MetaData name={meta.name} value={meta.value} />
            </li>
          )) }
        </ul>

        <ul>
          { relatedData.map(related => (
            <li key={`${related.type}-${related.url}`}>
              <RelatedData type={related.type} url={related.url} />
            </li>
          )) }
        </ul>
      </article>
    );
  }
}

export default Card;
