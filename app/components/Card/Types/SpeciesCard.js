import React from 'react';
import PropTypes from 'prop-types';

// import Card from '../Card';

class SpeciesCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
  };

  render() {
    const { type, data } = this.props;

    return (
      <article>
        <h6>{type}</h6>
        <p>{data.title}</p>
      </article>
    );
  }
}

export default SpeciesCard;
