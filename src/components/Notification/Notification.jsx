import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';
// компонент "Notification" приймає пропу "message".
// призначений для відображення повідомлення або
// сповіщення з переданим текстом.
export const Notification = ({ message }) => (
  //Компонент відображається як абзац `<p>` з текстом, що міститься у пропі "message".
  //Клас "notification__text" задає стилізацію для вигляду тексту.
  <p className={s.notification__text}>{message}</p>
);
// PropTypes для валідації пропів.
// PropTypes.string.isRequired вказує, що "message"
// повинно бути рядком і є обов'язковим пропом.
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
