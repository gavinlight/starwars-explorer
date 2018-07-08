import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class SpeciesCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      classification: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      eye_colors: PropTypes.string.isRequired,
      hair_colors: PropTypes.string.isRequired,
      skin_colors: PropTypes.string.isRequired,
      average_height: PropTypes.string.isRequired,
      average_lifespan: PropTypes.string.isRequired,
      people: PropTypes.array.isRequired,
    }).isRequired,
  };

  formatData() {
    const { type, data } = this.props;

    return {
      title: data.name,
      tag: type,
      url: data.url,
      metaData: [
        { name: 'Classification', value: data.classification },
        { name: 'Designation', value: data.designation },
        { name: 'Language', value: data.language },
        { name: 'Eye colors', value: data.eye_colors },
        { name: 'Hair colors', value: data.hair_colors },
        { name: 'Skin colors', value: data.skin_colors },
        { name: 'Average height', value: data.average_height },
        { name: 'Average lifestpan', value: data.average_lifespan },
      ],
      relatedData: data.people.slice(0, 3).map(character => ({
        type: 'person', url: character,
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

export default SpeciesCard;
