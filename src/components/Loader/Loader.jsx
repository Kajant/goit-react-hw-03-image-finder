import css from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={css.loader}>
          render(<Oval
          visible={true}
          height="80"
          width="80"     
          color="#303f9f"
          secondaryColor="#3f51b5"
          ariaLabel="oval-loading"
          strokeWidth="6"
          strokeWidthSecondary="1"
  />)
        </div>
    );
};

export default Loader;