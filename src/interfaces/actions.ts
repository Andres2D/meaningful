import { BaseAction } from '../actions/base';
import { Download } from '../actions/download';
export interface ActionsMap {
  [key: string]: {
    src: string;
    alt: string;
    class: Download | BaseAction;
  }
}
