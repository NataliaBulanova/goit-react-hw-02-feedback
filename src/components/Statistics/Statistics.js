import { Component } from "react/cjs/react.development";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addToGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  addToNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addToBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.addToGood}>
          Good
        </button>
        <button type="button" onClick={this.addToNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.addToBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li></li>
        </ul>
      </div>
    );
  }
}

// ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <ul>
//       <li>Good: {good}</li>
//       <li>Neutral: {neutral}</li>
//       <li>Bad: {bad}</li>
//       <li>Total: {total}</li>
//       <li>Positive feedback: {positivePercentage}</li>
//     </ul>
//   );
// };

export default Statistics;
