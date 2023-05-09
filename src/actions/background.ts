import { BaseAction } from "./base";
import { backgroundColors } from '../constants/actions';
import { rgb2hex } from '../helpers/colors';

export class Background extends BaseAction {

  constructor() {
    super();
  }

  execute(): void {
    const cardElement = document.getElementById('wallpaper');
    if(!cardElement) {
      return;
    }

    let currentColor = cardElement.style.backgroundColor;
    currentColor = currentColor.includes('#') ? currentColor : rgb2hex(currentColor);
    const currentColorIndex = backgroundColors.findIndex(color => color === currentColor.toUpperCase());
    const newColorIndex = currentColorIndex < backgroundColors.length - 1 ? currentColorIndex + 1 : 0;
    const newColor = backgroundColors[newColorIndex];
    
    cardElement.style.backgroundColor = newColor;
  }
}
