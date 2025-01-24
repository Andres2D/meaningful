import { Download } from '../actions';
import { download, background, labels, wordle } from '../assets/icons';
import { ActionsMap } from '../interfaces/actions';
import { Background } from '../actions/background';
import { Labels } from '../actions/labels';

export const actionMap: ActionsMap = {
  background: {
    src: background,
    alt: 'background',
    class: new Background()
  },
  labels: {
    src: labels,
    alt: 'labels',
    class: new Labels()
  },
  download: {
    src: download,
    alt: 'download',
    class: new Download()
  },
  // wordle: {
  //   src: wordle,
  //   alt: 'wordle',
  //   class: null
  // }
};

export const backgroundColors: string[] = [
  '#000000',
  '#2D3737', 
  '#323232', 
  '#3C3232', 
  '#1D3649', 
  '#412356', 
  '#601146', 
  '#6E0A1E', 
  '#3C3200', 
  '#0A3C02', 
  '#003C32',
  '#C8D2D2', 
  '#C7C7C7', 
  '#D0C7C7', 
  '#7CC7FF', 
  '#FF9EEE', 
  '#FFA5B4', 
  '#FFA573', 
  '#FDD600', 
  '#B4E051', 
  '#6EEDD8',
  '#373636'
];

export const labelTitles: string[] = ['#E5E5E5', '#000203'];
