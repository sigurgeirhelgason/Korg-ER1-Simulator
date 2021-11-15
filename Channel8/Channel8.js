/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel8/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel8/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound(
        "CLPZ-ER1-ClapClick",
        "./Channel8/sounds/CLPZ-ER1-ClapClick.wav"
      ),
      new Sound(
        "CLPZ-ER1-ClapDoffel",
        "./Channel8/sounds/CLPZ-ER1-ClapDoffel.wav"
      ),
      new Sound("CLPZ-ER1-ClapHaze", "./Channel8/sounds/CLPZ-ER1-ClapHaze.wav"),
      new Sound(
        "CLPZ-ER1-ClapHiFive",
        "./Channel8/sounds/CLPZ-ER1-ClapHiFive.wav"
      ),
      new Sound("CLPZ-ER1-ClapLow", "./Channel8/sounds/CLPZ-ER1-ClapLow.wav"),
      new Sound(
        "CLPZ-ER1-ClapLowest",
        "./Channel8/sounds/CLPZ-ER1-ClapLowest.wav"
      ),
      new Sound("CLPZ-ER1-ClapNeat", "./Channel8/sounds/CLPZ-ER1-ClapNeat.wav"),
      new Sound(
        "CLPZ-ER1-Clapnormal",
        "./Channel8/sounds/CLPZ-ER1-Clapnormal.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "channel_select" },
        this.whenIReceiveChannelSelect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "channel_8" },
        this.whenIReceiveChannel8
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo8 = 1;
    this.vars.pressed8 = 1;
    this.vars.channelNo8 = 8;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo8 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_9");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed8 = 2;
      this.costume = this.vars.pressed8;
    } else {
      this.vars.pressed8 = 1;
      this.costume = this.vars.pressed8;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo8) {
        this.costume = "button3";
        if (this.vars.pressed8 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed8;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed8;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel8);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo8 &&
      this.stage.vars.play == 2
    ) {
      if (this.stage.vars.play == 2) {
        this.broadcast("blink");
        while (!!(this.stage.vars.play == 2)) {
          this.costume = this.stage.vars.blinkLight;
          yield;
        }
      }
    }
  }

  *whenIReceiveChannelSelect() {
    if (this.vars.channelNo8 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel8() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo8 = 1;
    this.vars.pressed8 = 1;
    this.vars.channelNo8 = 8;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo8) {
      yield* this.playSoundUntilDone(this.stage.vars.soundChannel8);
    }
  }
}
