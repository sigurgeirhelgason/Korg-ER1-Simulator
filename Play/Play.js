/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("play", "./Play/costumes/play.png", { x: 77, y: 58 }),
      new Costume("play_green", "./Play/costumes/play_green.png", {
        x: 78,
        y: 59
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.play == 0 || this.stage.vars.play == 2) {
      this.stage.vars.play = 1;
      this.costume = "play_green";
    } else {
      this.stage.vars.play = 2;
    }
    yield* this.blinkControl();
  }

  *whenGreenFlagClicked() {
    this.goto(-97, -56);
    this.costume = "play";
    while (true) {
      if (this.stage.vars.play == 0) {
        this.costume = "play";
      }
      yield;
    }
  }

  *blinkControl() {
    if (this.stage.vars.play == 2) {
      this.broadcast("blink");
      while (!!(this.stage.vars.play == 2)) {
        this.costume = this.stage.vars.blinkLight;
        yield;
      }
    }
  }
}
