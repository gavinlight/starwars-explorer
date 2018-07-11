import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchResults } from '../store/actions/fetchResults';
import { emptyResults } from '../store/actions/emptyResults';
import { sortResults } from '../store/actions/sortResults';
import { searchResults } from '../store/actions/searchResults';

import Page from '.';
import WrapperCard from '../components/Card/WrapperCard';

class Category extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string.isRequired,
      }),
    }).isRequired,

    fetchResults: PropTypes.func.isRequired,
    emptyResults: PropTypes.func.isRequired,
    sortResults: PropTypes.func.isRequired,
    searchResults: PropTypes.func.isRequired,

    results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      category: props.match.params.category,
      query: '',
    };
  }

  componentWillMount() {
    const { fetchResults } = this.props;
    const { category } = this.state;
    fetchResults(category);
  }

  componentWillUnmount() {
    const { emptyResults } = this.props;
    emptyResults();
  }

  setSearchQuery(event) {
    const { searchResults } = this.props;
    const query = event.target.value;

    this.setState({ query });
    searchResults(query);
  }

  categoryName() {
    const { category } = this.state;
    return category[0].toUpperCase() + category.slice(1);
  }

  render() {
    const { category, query } = this.state;
    const { results, sortResults } = this.props;
    const categoryName = this.categoryName();

    return (
      <Page title={categoryName}>
        <section className="header-action-bar">
          <input type="text" placeholder="Search" onChange={event => this.setSearchQuery(event)} value={query} />
          <button type="button" onClick={sortResults}>Sort</button>
        </section>

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
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps, {
  fetchResults, emptyResults, sortResults, searchResults,
})(Category);
