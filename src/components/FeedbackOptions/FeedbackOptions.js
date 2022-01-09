const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <button type="button" key={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        );
      })}
    </>
  );
};
export default FeedbackOptions;
