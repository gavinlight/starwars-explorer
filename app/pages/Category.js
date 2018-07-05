import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import WrapperCard from '../components/Card/WrapperCard';

class Category extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      category: props.match.params.category,
    };
  }

  componentDidMount() {
    const { category } = this.state;

    axios.get(`https://swapi.co/api/${category}/`)
      .then((response) => {
        this.setState({ results: response.data.results });
      })
      .catch(() => {
        // Handle error
      });
  }

  categoryName() {
    const { category } = this.state;
    return category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const { results, category } = this.state;
    const categoryName = this.categoryName();

    return (
      <div>
        <h1>{categoryName}</h1>

        <ul>
          { results.map(result => (
            <li key={result.url}>
              <WrapperCard
                data={result}
                type={category}
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Category;
