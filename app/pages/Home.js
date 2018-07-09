import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCategories } from '../store/actions/fetchCategories';

import Card from '../components/Card/Card';
import logo from '../assets/images/star-wars-logo.png';

class Home extends React.Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.shape({}).isRequired,
  };

  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <h2 id="heading">Starwars Explorer</h2>

        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="auto"
          width="150"
          src={logo}
          alt="Star Wars Logo"
        />

        { Object.keys(categories).map(cat => (
          <Card
            key={`cat-card-${cat}`}

            title={cat}
            url={`/#/cat/${cat}`}
            tag="Category"
          />
        )) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { fetchCategories })(Home);
