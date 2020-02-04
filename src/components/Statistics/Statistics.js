import React from 'react';
import PropTypes from 'prop-types';
import Statvalues from './Statvalues';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <ul style={{ listStyle: 'none' }}>
      <Statvalues name="Good" value={good} />
      <Statvalues name="Neutral" value={neutral} />
      <Statvalues name="Bad" value={bad} />
      <Statvalues name="Total" value={total} />
      <Statvalues name="Positive feedback" value={positivePercentage} />
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
