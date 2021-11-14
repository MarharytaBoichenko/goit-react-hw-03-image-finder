import s from './Buton.module.css';

export function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      Load more
    </button>
  );
}
