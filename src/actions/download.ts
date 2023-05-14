import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { BaseAction } from "./base";

export class Download extends BaseAction {

  constructor() {
    super();
  }

  execute = async() => {
    let wallpaper = document.getElementById('wallpaper');
    const word = document.getElementById('word');
    if(!wallpaper || !word) return;
    wallpaper = this.addWallpaperDownloadStyles(wallpaper);
    const canvas = await html2canvas(wallpaper);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, `${word.textContent}-wallpaper.png`, 'image/png');
    wallpaper = this.resetWallpaperDownloadStyles(wallpaper);
  }

  private addWallpaperDownloadStyles = (element: HTMLElement): HTMLElement => {
    element.style.height = '100vh';
    element.style.borderRadius = '0';
    element.style.width = '100%';
    element.style.paddingTop = '100px';
    return element;
  }
  
  private resetWallpaperDownloadStyles = (element: HTMLElement): HTMLElement => {
    element.style.height = '550px';
    element.style.borderRadius = '10px';
    element.style.width = window.innerWidth < 365 ? '100%' : '350px';
    element.style.paddingTop = '20px';
    return element;
  }
}
