import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onLeaveFeedback = e => {
    // console.log(e.target)
    // console.log(e.currentTarget)
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      }
    })
  }
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    if (good > 0 || neutral > 0 || bad > 0) {
      return ((good / (good + neutral + bad)) * 100).toFixed(0);
    } else {
      return 0;
    }
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback
    return <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)} 
          onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
       <Section title="Statistics">
        
       {total() ? (<Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />):
          (<Notification message="There is no feedback"/>)
       }
      </Section>


    </>
  }
}