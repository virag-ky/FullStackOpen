import StatisticLine from './StatisticLine';

const Statistics = ({
  all,
  good,
  bad,
  neutral,
  positive_feedback,
  average_feedback,
}) => {
  if (all === 0) {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average_feedback()} />
      <StatisticLine text="Positive" value={positive_feedback() + '%'} />
    </div>
  );
};

export default Statistics;
