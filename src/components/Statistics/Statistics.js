const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

// () => {
// };

/* <h2>Statistics</h2>
<ul>
  <li>good:{this.state.good}</li>
  <li>neutral:{this.state.neutral}</li>
  <li>bad:{this.state.bad}</li>
  <li>Total:{total}</li>
  <li>Positive feedback:{positivePercentage}%</li>
</ul> */

export default Statistics;
