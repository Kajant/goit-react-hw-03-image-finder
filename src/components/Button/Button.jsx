import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={css.Button}>
        Load more
      </button>
    </>
  );
};

export default Button;