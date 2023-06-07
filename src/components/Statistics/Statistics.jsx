import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
// компонент "Statistics"приймає п'ять пропів: "good", "neutral", "bad", "total" і "positivePercentage".
// призначений для відображення статистичних даних: кількість позитивних, нейтральних
// і негативних відгуків, загальна кількість відгуків і відсоток позитивних відгуків.
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={s.statistics__container}>
    <h3 className={s.statistics__head}>Statistics</h3>
    <ul className={s.statistics__list}>
      {/*  кількість позитивних відгуків. */}
      <li>Good: {good}</li>
      {/*  кількість нейтральних відгуків. */}
      <li>Neutral: {neutral}</li>
      {/* кількість негативних відгуків. */}
      <li>Bad: {bad}</li>
      {/* загальна кількість відгуків. */}
      <li>Total: {total}</li>
      {/* відсоток позитивних відгуків. */}
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);
// PropTypes.number.isRequired вказує, що всі пропи повинні бути числового типу і є обов'язковими.
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
