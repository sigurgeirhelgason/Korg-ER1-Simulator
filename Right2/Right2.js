/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Right2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("right2", "./Right2/costumes/right2.png", { x: 44, y: 33 }),
      new Costume("right2_2", "./Right2/costumes/right2_2.png", {
        x: 44,
        y: 33
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-127, -11);
  }

  *whenthisspriteclicked() {
    yield* this.blink();
    if (this.stage.vars.channelSelected == 1) {
      this.stage.vars.soundChannel1 += 1;
    }
    if (this.stage.vars.channelSelected == 2) {
      this.stage.vars.soundChannel2 += 1;
    }
    if (this.stage.vars.channelSelected == 3) {
      this.stage.vars.soundChannel3 += 1;
    }
    if (this.stage.vars.channelSelected == 4) {
      this.stage.vars.soundChannel4 += 1;
    }
    if (this.stage.vars.channelSelected == 5) {
      this.stage.vars.soundChannel5 += 1;
    }
    if (this.stage.vars.channelSelected == 6) {
      this.stage.vars.soundChannel6 += 1;
    }
    if (this.stage.vars.channelSelected == 7) {
      this.stage.vars.soundChannel7 += 1;
    }
    if (this.stage.vars.channelSelected == 8) {
      this.stage.vars.soundChannel8 += 1;
    }
    if (this.stage.vars.channelSelected == 9) {
      this.stage.vars.soundChannel9 += 1;
    }
    this.broadcast("play_once");
    this.broadcast("play_once");
  }

  *blink() {
    this.costume = "right2_2";
    yield* this.wait(0.2);
    this.costume = "right2";
  }
}
