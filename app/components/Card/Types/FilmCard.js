import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class FilmCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      producer: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      opening_crawl: PropTypes.string.isRequired,
      characters: PropTypes.array.isRequired,
    }).isRequired,
  };

  formatData() {
    const { type, data } = this.props;

    return {
      title: data.title,
      category: type,
      metaData: [
        { name: 'Director', value: data.director },
        { name: 'Producer', value: data.producer },
        { name: 'Release date', value: data.release_date },
        { name: 'Opening crawl', value: `${data.opening_crawl.substring(0, 50)}...` },
      ],
      relatedData: data.characters.slice(0, 3).map(character => ({
        type: 'character', url: character,
      })),
    };
  }

  render() {
    const data = this.formatData();

    return (
      <Card
        title={data.title}
        category={data.category}
        metaData={data.metaData}
        relatedData={data.relatedData}
      />
    );
  }
}

export default FilmCard;

