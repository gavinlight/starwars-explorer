import React from 'react';
import PropTypes from 'prop-types';

import MetaData from './Details/MetaData';
import RelatedData from './Details/RelatedData';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    url: PropTypes.string.isRequired,

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
    tag: '',
    metaData: [],
    relatedData: [],
  }

  render() {
    const {
      title, tag, url, metaData, relatedData,
    } = this.props;

    return (
      <article>
        <h1><a href={url}>{title}</a></h1>
        <h2>{tag}</h2>

        { relatedData.length > 0 && (
          <ul>
            { metaData.map(meta => (
              <li key={`${meta.name}-${meta.value}`}>
                <MetaData name={meta.name} value={meta.value} />
              </li>
            )) }
          </ul>
        ) }

        { relatedData.length > 0 && (
          <ul>
            { relatedData.map(related => (
              <li key={`${related.type}-${related.url}`}>
                <RelatedData type={related.type} url={related.url} />
              </li>
            )) }
          </ul>
        ) }

      </article>
    );
  }
}

export default Card;
