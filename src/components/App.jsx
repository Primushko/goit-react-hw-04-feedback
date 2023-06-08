import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FreedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </>
  );
}
// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   }

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   handleLeaveFeedback = event => {
//     const { name } = event.target;
//     this.setState(state => ({ [name]: state[name] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = this.countTotalFeedback();

//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     return (
//       // <>
//       //   <Section title="Please leave feedback">
//       //     <FeedbackOptions
//       //       options={this.state}
//       //       onLeaveFeedback={this.handleLeaveFeedback}
//       //     />
//       //     {total === 0 ? (
//       //       <Notification message="There is no feedback"></Notification>
//       //     ) : (
//       //       <Statistics
//       //         good={good}
//       //         neutral={neutral}
//       //         bad={bad}
//       //         total={total}
//       //         positivePercentage={positiveFeedback}
//       //       />
//       //     )}
//       //   </Section>
//       // </>
//     );
//   }
// }
