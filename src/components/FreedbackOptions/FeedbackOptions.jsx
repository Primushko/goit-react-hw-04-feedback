import PropTypes from 'prop-types';
import s from '../FreedbackOptions/FeedbackOptions.module.css';
// компонент "FeedbackOptions" приймає два пропи: "options" і "onLeaveFeedback".
// призначений для відображення набору кнопок зворотного зв'язку і передачі вибраного
// варіанту зворотного зв'язку батьківському компоненту для подальшої обробки.
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  //- "options" є об'єктом, який містить різні варіанти зворотного зв'язку ("Good", "Bad", "Neutral").
  //- "onLeaveFeedback" - функцією зворотнього виклику, яка викликається при натисканні кнопки зворотного зв'язку.
  <div className={s.feedback__container}>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={s.feedback__btn}
      >
        {option}
      </button>
    ))}
  </div>
);
//PropTypes для валідації пропів.
//PropTypes.object.isRequired вказує, що "options" повинен бути об'єктом,
//PropTypes.func.isRequired вказує, що "onLeaveFeedback" повинен бути функцією і є обов'язковим пропом.
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
