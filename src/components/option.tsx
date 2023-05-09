import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import styles from './option.module.scss';
import { ButtonAction } from '../types/actions';
import { actionMap } from '../constants/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../interfaces/store';

type Props = {
  action: ButtonAction
};

const Option = ({action}: Props) => {

  const {src, alt} = actionMap[action];
  const { word } = useSelector((state: RootState) => state.meaning);

  const handleClick = async () => {
    const wallpaper = document.getElementById('wallpaper');
    if(!wallpaper) return;
    const canvas = await html2canvas(wallpaper);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, `${word}-wallpaper.png`, 'image/png');
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
