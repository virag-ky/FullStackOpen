import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const addGood = () => {
    setAll(all + 1);
    setGood(good + 1);
  };

  const addNeutral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  const average_feedback = () => {
    return all !== 0 ? (good + bad) / all : 0;
  };

  const positive_feedback = () => {
    return all !== 0 ? (100 / all) * good : 0;
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={addGood} text="good" />
      <Button onClick={addNeutral} text="neutral" />
      <Button onClick={addBad} text="bad" />
      <Statistics
        all={all}
        good={good}
        neutral={neutral}
        bad={bad}
        average_feedback={average_feedback}
        positive_feedback={positive_feedback}
      />
    </div>
  );
};

export default App;
