import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onLeaveFeedback = reviewBtn => {
  //   this.setState(prevState => ({
  //     [reviewBtn]: prevState[reviewBtn] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((total, value) => total + value, 0);
  // };
  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const namesButtons = Object.keys(this.state);
      return (
          <div>
            <FeedbackOptions
                options={ ['good', 'neutral', 'bad'] }
                onLeaveFeedback={addFeedback}
              />
                   
            {countTotalFeedback() > 0 ? (
                <Statistics 
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                ></Statistics>
                ) : (
                    <Notification message="No feedback given" />
                )}
          </div>
      );
    }
export default App;