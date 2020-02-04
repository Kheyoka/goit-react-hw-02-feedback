import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default class Section extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countonLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, e) => acc + e);
  };

  countPositiveFeedbackPercentage = () => {
    return `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(
      0,
    )}%`;
  };

  render() {
    const { title } = this.props;
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <section>
        <h1>{title}</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.countonLeaveFeedback}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </section>
    );
  }
}
