import React from 'react';
import propTypes from 'prop-types';
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
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};
export default Statistics;
