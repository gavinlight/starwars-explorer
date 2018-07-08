import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class PlanetCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired,
      gravity: PropTypes.string.isRequired,
      orbital_period: PropTypes.string.isRequired,
      population: PropTypes.string.isRequired,
      rotation_period: PropTypes.string.isRequired,
      surface_water: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      residents: PropTypes.array.isRequired,
    }).isRequired,
  };

  formatData() {
    const { type, data } = this.props;

    return {
      title: data.name,
      tag: type,
      url: data.url,
      metaData: [
        { name: 'Diameter', value: data.diameter },
        { name: 'Gravity', value: data.gravity },
        { name: 'Orbital period', value: data.orbital_period },
        { name: 'Population', value: data.population },
        { name: 'Surface water', value: data.surface_water },
        { name: 'Terrain', value: data.terrain },
      ],
      relatedData: data.residents.slice(0, 3).map(character => ({
        type: 'resident', url: character,
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

export default PlanetCard;
