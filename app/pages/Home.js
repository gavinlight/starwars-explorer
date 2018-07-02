import React from 'react';
import axios from 'axios';

import CategoryLabel from '../components/CategoryLabel';

import logo from '../assets/images/star-wars-logo.png';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Starwars Explorer',
      categories: {},
    };
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/')
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch(() => {
        // Handle error
      });
  }

  render() {
    const { title, categories } = this.state;

    return (
      <div>
        <h2 id="heading">{ title }</h2>

        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="auto"
          width="150"
          src={logo}
          alt="Star Wars Logo"
        />

        {Object.keys(categories).map(cat => (
          <CategoryLabel
            key={`cat-list-${cat}`}
            category={cat}
          />
        ))}
      </div>
    );
  }
}

export default Home;
