import { BaseAction } from "./base";
import { labelTitles } from '../constants/actions';
import { rgb2hex } from '../helpers/colors';

export class Labels extends BaseAction {

  constructor() {
    super();
  }

  execute(): void {
    const cardElement = document.getElementById('wallpaper');
    if(!cardElement) {
      return;
    }

    let currentColor = cardElement.style.color;
    currentColor = currentColor.includes('#') ? currentColor : rgb2hex(currentColor);
    const currentColorIndex = labelTitles.findIndex(color => color === currentColor.toUpperCase());
    const newColorIndex = currentColorIndex < labelTitles.length - 1 ? currentColorIndex + 1 : 0;
    const newColor = labelTitles[newColorIndex];
    
    cardElement.style.color = newColor;
  }
}
