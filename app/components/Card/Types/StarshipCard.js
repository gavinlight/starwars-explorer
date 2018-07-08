import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class StarshipCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      passengers: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      max_atmosphering_speed: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      hyperdrive_rating: PropTypes.string.isRequired,
      crew: PropTypes.string.isRequired,
      cost_in_credits: PropTypes.string.isRequired,
      consumables: PropTypes.string.isRequired,
      cargo_capacity: PropTypes.string.isRequired,
      MGLT: PropTypes.string.isRequired,
      pilots: PropTypes.array.isRequired,
    }).isRequired,
  };

  formatData() {
    const { type, data } = this.props;

    return {
      title: data.name,
      category: type,
      metaData: [
        { name: 'Passengers', value: data.passengers },
        { name: 'model', value: data.model },
        { name: 'Max. atmosphering speed', value: data.max_atmosphering_speed },
        { name: 'Manufacturer', value: data.manufacturer },
        { name: 'Length', value: data.length },
        { name: 'hyperdrive rating', value: data.hyperdrive_rating },
        { name: 'crew', value: data.crew },
        { name: 'Cost in credits', value: data.cost_in_credits },
        { name: 'Consumables', value: data.consumables },
        { name: 'Cargo capacity', value: data.cargo_capacity },
        { name: 'MGLT', value: data.MGLT },
      ],
      relatedData: data.pilots.slice(0, 3).map(character => ({
        type: 'pilot', url: character,
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

export default StarshipCard;
