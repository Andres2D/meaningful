import styles from './option.module.scss';
import { ButtonAction } from '../types/actions';
import { actionMap } from '../constants/actions';

type Props = {
  action: ButtonAction | string
};

const Option = ({action}: Props) => {

  const {src, alt, class: classAction } = actionMap[action];

  const handleClick = async () => {
    classAction.execute();
  };

  return (
    <button className={styles.option} onClick={handleClick}>
      <img 
        src={src} 
        alt={alt}
        className={styles.icon}
      />
    </button>
  )
};

export default Option;
