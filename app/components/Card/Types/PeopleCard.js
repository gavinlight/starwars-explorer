import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class PeopleCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
      birth_year: PropTypes.string.isRequired,
      hair_color: PropTypes.string.isRequired,
      eye_color: PropTypes.string.isRequired,
      skin_color: PropTypes.string.isRequired,
      films: PropTypes.array.isRequired,
    }).isRequired,
  };

  formatData() {
    const { type, data } = this.props;

    return {
      title: data.name,
      tag: type,
      url: data.url,
      metaData: [
        { name: 'Gender', value: data.gender },
        { name: 'Length', value: data.height },
        { name: 'Weight', value: data.mass },
        { name: 'Birth year', value: data.birth_year },
        { name: 'Hair color', value: data.hair_color },
        { name: 'Eye color', value: data.eye_color },
        { name: 'Skin color', value: data.skin_color },
      ],
      relatedData: data.films.slice(0, 3).map(film => ({
        type: 'film', url: film,
      })),
    };
  }

  render() {
    const data = this.formatData();

    return (
      <Card
        title={data.title}
        tag={data.tag}
        url={data.url}
        metaData={data.metaData}
        relatedData={data.relatedData}
      />
    );
  }
}

export default PeopleCard;
