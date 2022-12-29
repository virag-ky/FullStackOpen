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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average_feedback()}</p>
      <p>Positive: {positive_feedback()} %</p>
    </div>
  );
};

export default Statistics;
