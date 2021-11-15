/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UpButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("up", "./UpButton/costumes/up.png", { x: 43, y: 32 }),
      new Costume("up_2", "./UpButton/costumes/up_2.png", { x: 43, y: 32 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-193, 34);
  }

  *whenthisspriteclicked() {
    this.costume = "up_2";
    this.stage.vars.speed += -0.01;
    yield* this.wait(0.2);
    this.costume = "up";
  }
}
