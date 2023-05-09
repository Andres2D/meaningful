import { BaseAction } from "./base";

export class Background extends BaseAction {

  constructor() {
    super();
  }

  execute(): void {
    console.log('Change background');
  }
}