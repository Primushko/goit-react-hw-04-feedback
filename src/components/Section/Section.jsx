import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';
// компонент "Section"приймає два пропи: "title" і "children".
// призначений для створення секції з заголовком і відображенням дочірніх елементів в середині цієї секції.
export const Section = ({ title, children }) => (
  <section className={s.feedback}>
    <h2 className={s.feedback__title}> {title}</h2>
    {children}
  </section>
);
//PropTypes.string.isRequired вказує, що "title" повинно бути рядком і є обов'язковим пропом.
//PropTypes.node.isRequired вказує, що "children" може бути (текстом, компонентами, HTML-ел.) і є
//обов'язковим пропом.
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
