import React from 'react';
import PropTypes from 'prop-types';

import InfoToggle from './Details/InfoToggle';

const Card = ({
  title, tag, url, metaData, relatedData,
}) => {
  return (
    <article className="card">
      <span className="tag">{tag}</span>

      <h1><a href={url}>{title}</a></h1>
      <InfoToggle metaData={metaData} relatedData={relatedData} />
    </article>
  );
};

Card.propTypes = {
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

Card.defaultProps = {
  tag: '',
  metaData: [],
  relatedData: [],
};

export default Card;
