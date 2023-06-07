import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FreedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      // встановлюються початкові значення для стану зворотного зв'язку: `good`, `neutral` та `bad`
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  // Метод countTotalFeedback обчислює загальну кількість зворотного зв'язку,
  // шляхом додавання значень `good`, `neutral` та `bad` зі стану.
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  // Метод `countPositiveFeedbackPercentage` обчислює відсоток позитивного зворотного зв'язку відносно загальної кількості.
  // використовує `good` зі стану та викликає метод `countTotalFeedback` для отримання загальної кількості.
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  // Метод `handleLeaveFeedback` викликається при натисканні на кнопки зворотного зв'язку.
  // Він отримує назву кнопки та оновлює лічильник (значення `good`, `neutral` або `bad`) у стані додатка.
  handleLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  // У методі `render`  відбувається  відображення компонентів `Section`, `FeedbackOptions`, `Notification` та `Statistics`.
  render() {
    // Змінні `good`, `neutral` та `bad` отримують значення зі стану.
    const { good, neutral, bad } = this.state;
    // Змінна `total` отримує значення загальної кількості зворотного зв'язку
    const total = this.countTotalFeedback();
    // `positiveFeedback` отримує значення відсотка позитивного зворотного зв'язку.
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        {/* Комп-т Section відображає заголовок, розміщує усередині компоненти FeedbackOptions, Notification або Statistics, залежно від total*/}
        <Section title="Please leave feedback">
          {/* Комп-т FeedbackOptions відображає кнопки для зворотного зв'язку та передає handleLeaveFeedback для обробки натискання на кнопки.  */}
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
          {total === 0 ? (
            // Комп-т Notification відображає повідомлення "There is no feedback", якщо значення `total` рівне 0
            <Notification message="There is no feedback"></Notification>
          ) : (
            // Комп-т `Statistics` відображає статистику зворотного зв'язку,
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
}
