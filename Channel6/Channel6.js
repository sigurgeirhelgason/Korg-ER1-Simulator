/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel6/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel6/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound(
        "CYM-ER1-CrashCymbal1",
        "./Channel6/sounds/CYM-ER1-CrashCymbal1.wav"
      ),
      new Sound(
        "CYM-ER1-CrashCymbal2hi",
        "./Channel6/sounds/CYM-ER1-CrashCymbal2hi.wav"
      ),
      new Sound(
        "CYM-ER1-CrashCymbal3shortz",
        "./Channel6/sounds/CYM-ER1-CrashCymbal3shortz.wav"
      ),
      new Sound(
        "CYM-ER1-CrashCymbal5wahzzz",
        "./Channel6/sounds/CYM-ER1-CrashCymbal5wahzzz.wav"
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
        { name: "channel_6" },
        this.whenIReceiveChannel6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo6 = 1;
    this.vars.pressed6 = 1;
    this.vars.channelNo6 = 6;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo6 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_7");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed6 = 2;
      this.costume = this.vars.pressed6;
    } else {
      this.vars.pressed6 = 1;
      this.costume = this.vars.pressed6;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo6) {
        this.costume = "button3";
        if (this.vars.pressed6 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed6;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed6;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel6);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo6 &&
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
    if (this.vars.channelNo6 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel6() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo6 = 1;
    this.vars.pressed6 = 1;
    this.vars.channelNo6 = 6;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo6) {
      yield* this.playSoundUntilDone(this.stage.vars.soundChannel6);
    }
  }
}
