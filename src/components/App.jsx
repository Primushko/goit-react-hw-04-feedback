import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FreedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
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
        break;
    }
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
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

// export function App() {
//   const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

//   const countTotalFeedback = () => {
//     return feedback.good + feedback.neutral + feedback.bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return Math.round((feedback.good / countTotalFeedback()) * 100);
//   };

//   const handleLeaveFeedback = event => {
//     const { name } = event.target;
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       [name]: prevFeedback[name] + 1,
//     }));
//   };

//   const { good, neutral, bad } = feedback;
//   const total = countTotalFeedback();
//   const positiveFeedback = countPositiveFeedbackPercentage();

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={feedback}
//           onLeaveFeedback={handleLeaveFeedback}
//         />
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positiveFeedback}
//           />
//         )}
//       </Section>
//     </>
//   );
// }
