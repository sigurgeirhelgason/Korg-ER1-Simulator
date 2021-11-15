/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Left2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("left2", "./Left2/costumes/left2.png", { x: 44, y: 33 }),
      new Costume("left2_2", "./Left2/costumes/left2_2.png", { x: 44, y: 33 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-155, -11);
    this.costume = "right2";
  }

  *whenthisspriteclicked() {
    yield* this.blink();
    if (this.stage.vars.channelSelected == 1) {
      this.stage.vars.soundChannel1 += -1;
    }
    if (this.stage.vars.channelSelected == 2) {
      this.stage.vars.soundChannel2 += -1;
    }
    if (this.stage.vars.channelSelected == 3) {
      this.stage.vars.soundChannel3 += -1;
    }
    if (this.stage.vars.channelSelected == 4) {
      this.stage.vars.soundChannel4 += -1;
    }
    this.broadcast("play_once");
  }

  *blink() {
    this.costume = "left2_2";
    yield* this.wait(0.2);
    this.costume = "left2";
  }
}
