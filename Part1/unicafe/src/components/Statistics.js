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
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average_feedback()} />
      <StatisticLine text="Positive" value={positive_feedback() + '%'} />
    </tbody>
  );
};

export default Statistics;
