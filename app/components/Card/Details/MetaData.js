import React from 'react';
import PropTypes from 'prop-types';

const MetaData = (props) => {
  const { name, value } = props;

  return (
    <div>
      <span>{name}: </span>
      {value}
    </div>
  );
};

MetaData.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MetaData;
