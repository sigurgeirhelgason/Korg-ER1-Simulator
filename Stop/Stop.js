/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stop", "./Stop/costumes/stop.png", { x: 65, y: 59 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-145, -56);
  }

  *whenthisspriteclicked() {
    this.stage.vars.play = 0;
  }
}
