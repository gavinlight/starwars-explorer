import React from 'react';
import PropTypes from 'prop-types';

import PeopleCard from './Types/PeopleCard';
import FilmCard from './Types/FilmCard';
import StarshipCard from './Types/StarshipCard';
import VehicleCard from './Types/VehicleCard';
import SpeciesCard from './Types/SpeciesCard';
import PlanetCard from './Types/PlanetCard';

class WrapperCard extends React.Component {
  cardTypes = {
    people: PeopleCard,
    films: FilmCard,
    starships: StarshipCard,
    vehicles: VehicleCard,
    species: SpeciesCard,
    planets: PlanetCard,
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
  };

  getTypeCard() {
    const { type } = this.props;
    return Object.prototype.hasOwnProperty.call(this.cardTypes, type)
            && this.cardTypes[type];
  }

  render() {
    const { type, data } = this.props;
    const TypeCard = this.getTypeCard();

    return (TypeCard && <TypeCard type={type} data={data} />);
  }
}

export default WrapperCard;
