/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DownButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("down_1", "./DownButton/costumes/down_1.png", {
        x: 43,
        y: 32
      }),
      new Costume("down_2", "./DownButton/costumes/down_2.png", {
        x: 43,
        y: 32
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-193, 9);
  }

  *whenthisspriteclicked() {
    this.costume = "down_2";
    this.stage.vars.speed += 0.01;
    yield* this.wait(0.2);
    this.costume = "down_1";
  }
}
