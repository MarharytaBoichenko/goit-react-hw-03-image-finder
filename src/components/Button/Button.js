import PropTypes from 'prop-types';
import s from './Buton.module.css';

export function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
