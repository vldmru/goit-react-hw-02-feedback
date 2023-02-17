import { StatList } from './Statistics.styled';
import PropTypes from 'prop-types';


export default function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
         <StatList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive Feedback: {positivePercentage}%</li>
    </StatList>
    )
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
