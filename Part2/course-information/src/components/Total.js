const Total = ({ course }) => {
  const total = course.parts.reduce((acc, c) => acc + c.exercises, 0);
  return <p>Total of {total} exercises</p>;
};

export default Total;
