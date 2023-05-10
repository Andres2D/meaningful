import { BaseAction } from '../actions/base';
import { Download } from '../actions/download';
import { Labels } from '../actions/labels';
export interface ActionsMap {
  [key: string]: {
    src: string;
    alt: string;
    class: Download | BaseAction | Labels | null;
  }
}
