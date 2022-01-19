import PropTypes from "prop-types";
import Button from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Button type="button" key={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
