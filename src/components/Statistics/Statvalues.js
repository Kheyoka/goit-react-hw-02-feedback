import React from 'react';
import PropTypes from 'prop-types';

const Statvalues = ({ name, value }) => <li>{`${name}: ${value}`}</li>;

Statvalues.defaultProps = {
  value: 0,
};

Statvalues.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Statvalues;
