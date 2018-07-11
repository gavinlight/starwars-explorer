import React from 'react';
import PropTypes from 'prop-types';

import MetaData from './MetaData';
import RelatedData from './RelatedData';

class InfoToggle extends React.Component {
  static propTypes = {
    metaData: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,

    relatedData: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeMeta: true,
    };

    this.toggleInfoState = this.toggleInfoState.bind(this);
  }

  toggleInfoState() {
    this.setState(prevState => ({
      activeMeta: !prevState.activeMeta,
    }));
  }

  render() {
    const { metaData, relatedData } = this.props;
    const { activeMeta } = this.state;

    return (
      <section className="card-info">
        { metaData.length > 0 && (
          <button className={activeMeta ? 'active' : ''} type="button" onClick={this.toggleInfoState}>Meta data</button>
        ) }

        { relatedData.length > 0 && (
          <button className={!activeMeta ? 'active' : ''} type="button" onClick={this.toggleInfoState}>Related data</button>
        ) }

        { metaData.length > 0 && (
          <ul className={activeMeta ? 'active' : ''}>
            { metaData.map(meta => (
              <li key={`${meta.name}-${meta.value}`}>
                <MetaData name={meta.name} value={meta.value} />
              </li>
            )) }
          </ul>
        ) }

        { relatedData.length > 0 && (
          <ul className={!activeMeta ? 'active' : ''}>
            { relatedData.map(related => (
              <li key={`${related.type}-${related.url}`}>
                <RelatedData type={related.type} url={related.url} />
              </li>
            )) }
          </ul>
        ) }
      </section>
    );
  }
}

export default InfoToggle;
