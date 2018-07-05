import React from 'react';
import PropTypes from 'prop-types';

// import Card from '../Card';

class PeopleCard extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);
    const { type, data } = props;

    this.state = {
      formattedData: {
        title: data.name,
        category: type,
        meta_data: [
          { name: 'Gender', value: data.gender },
          { name: 'Length', value: data.height },
          { name: 'Weight', value: data.mass },
          { name: 'Birth year', value: data.birth_year },
          { name: 'Hair color', value: data.hair_color },
          { name: 'Eye color', value: data.eye_color },
          { name: 'Skin color', value: data.hair_color },
        ],
        related_data: data.films.slice(0, 3).map(film => ({
          type: 'films', url: film,
        })),
      },
    };
  }

  render() {
    const { type, data } = this.props;
    const { formattedData } = this.state;

    return (
      <article>
        <h6>{type}</h6>
        <p>{data.name}</p>
        { formattedData.title }
      </article>
    );
  }
}

export default PeopleCard;
