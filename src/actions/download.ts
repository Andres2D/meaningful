import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { BaseAction } from "./base";

export class Download extends BaseAction {

  constructor() {
    super();
  }

  execute = async() => {
    const wallpaper = document.getElementById('wallpaper');
    const word = document.getElementById('word');
    if(!wallpaper || !word) return;
    const canvas = await html2canvas(wallpaper);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, `${word.textContent}-wallpaper.png`, 'image/png');
  }
}
