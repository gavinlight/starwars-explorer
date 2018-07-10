import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCategories } from '../store/actions/fetchCategories';

import Page from '.';
import Card from '../components/Card/Card';

class Home extends React.Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.shape({}).isRequired,
  };

  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  categoryName = (cat) => {
    return cat[0].toUpperCase() + cat.slice(1);
  }

  render() {
    const { categories } = this.props;

    return (
      <Page title="Categories">
        { Object.keys(categories).map(cat => (
          <Card
            key={`cat-card-${cat}`}

            title={this.categoryName(cat)}
            url={`/#/cat/${cat}`}
            tag="Category"
          />
        )) }
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { fetchCategories })(Home);
