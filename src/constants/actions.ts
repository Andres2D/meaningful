import { Download } from '../actions';
import { download, background } from '../assets/icons';
import { ActionsMap } from '../interfaces/actions';
import { Background } from '../actions/background';

export const actionMap: ActionsMap = {
  download: {
    src: download,
    alt: 'download',
    class: new Download()
  },
  background: {
    src: background,
    alt: 'background',
    class: new Background()
  }
};
