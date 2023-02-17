import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>{options.map(option =>  
    (<Button 
          key={option}
          name={option}
            onClick={onLeaveFeedback}
            >
       {option}
      </Button>
    ))}</>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
