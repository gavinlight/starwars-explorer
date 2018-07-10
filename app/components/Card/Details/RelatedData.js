import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class RelatedData extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      type: this.capitalize(props.type),
      name: '',
    };
  }

  componentDidMount() {
    const { url } = this.props;

    axios.get(url)
      .then((response) => {
        this.setState({ name: response.data.name || response.data.title });
      })
      .catch(() => {
        // Handle error
      });
  }

  capitalize = (string) => { return string.charAt(0).toUpperCase() + string.slice(1); }

  render() {
    const { type, name } = this.state;
    const { url } = this.props;

    return (
      <div>
        <span>{type}: </span>
        <a target="_blank" rel="noopener noreferrer" href={url}>{name}</a>
      </div>
    );
  }
}

export default RelatedData;
