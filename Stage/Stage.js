/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("BD-ER1-90sTrance", "./Stage/sounds/BD-ER1-90sTrance.wav"),
      new Sound("BD-ER1-90sTrance2", "./Stage/sounds/BD-ER1-90sTrance2.wav"),
      new Sound(
        "BD-ER1-90sTrance2longdecay",
        "./Stage/sounds/BD-ER1-90sTrance2longdecay.wav"
      ),
      new Sound("BD-ER1-808ish1", "./Stage/sounds/BD-ER1-808ish1.wav"),
      new Sound("BD-ER1-808ish2", "./Stage/sounds/BD-ER1-808ish2.wav"),
      new Sound("BD-ER1-808ish3", "./Stage/sounds/BD-ER1-808ish3.wav"),
      new Sound(
        "BD-ER1-908-uhhhhhhh",
        "./Stage/sounds/BD-ER1-908-uhhhhhhh.wav"
      ),
      new Sound("BD-ER1-909iooo", "./Stage/sounds/BD-ER1-909iooo.wav"),
      new Sound("BD-ER1-CR8000ish", "./Stage/sounds/BD-ER1-CR8000ish.wav"),
      new Sound(
        "BD-ER1-CR8000ishMoreDecay",
        "./Stage/sounds/BD-ER1-CR8000ishMoreDecay.wav"
      ),
      new Sound(
        "BD-ER1-CR8000ishMostDecay",
        "./Stage/sounds/BD-ER1-CR8000ishMostDecay.wav"
      ),
      new Sound("BD-ER1-GoaKick", "./Stage/sounds/BD-ER1-GoaKick.wav"),
      new Sound(
        "BD-ER1-GoaKickLongDecay",
        "./Stage/sounds/BD-ER1-GoaKickLongDecay.wav"
      ),
      new Sound("BD-ER1-Hotmix95", "./Stage/sounds/BD-ER1-Hotmix95.wav"),
      new Sound(
        "BD-ER1-Hotmix95laser",
        "./Stage/sounds/BD-ER1-Hotmix95laser.wav"
      ),
      new Sound(
        "BD-ER1-Hotmix95trance",
        "./Stage/sounds/BD-ER1-Hotmix95trance.wav"
      ),
      new Sound("BD-ER1-LazerBD1", "./Stage/sounds/BD-ER1-LazerBD1.wav"),
      new Sound("BD-ER1-LazerBD2", "./Stage/sounds/BD-ER1-LazerBD2.wav"),
      new Sound("BD-ER1-LazerBD3", "./Stage/sounds/BD-ER1-LazerBD3.wav"),
      new Sound("BD-ER1-LazerBD5", "./Stage/sounds/BD-ER1-LazerBD5.wav"),
      new Sound("BD-ER1-Snuiter1", "./Stage/sounds/BD-ER1-Snuiter1.wav"),
      new Sound("BD-ER1-Stump", "./Stage/sounds/BD-ER1-Stump.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "blink" }, this.whenIReceiveBlink)
    ];

    this.vars.noteButtonsCounter = 16;
    this.vars.play = 0;
    this.vars.currentPos = 1;
    this.vars.speed = 0.2;
    this.vars.blinkLight = 1;
    this.vars.selectButtonCounter = 8;
    this.vars.channelSelected = 1;
    this.vars.soundChannel1 = 0;
    this.vars.soundChannel2 = 1;
    this.vars.soundChannel3 = 0;
    this.vars.soundChannel4 = 1;
    this.vars.soundChannel5 = 0;
    this.vars.soundChannel6 = 0;
    this.vars.soundChannel7 = 0;
    this.vars.tempPos = 0;
    this.vars.soundChannel8 = 0;
    this.vars.soundChannel9 = 0;
  }

  *whenGreenFlagClicked() {
    yield* this.reset();
    yield* this.posControl();
  }

  *reset() {
    this.vars.noteButtonsCounter = 0;
    this.vars.play = 0;
    this.vars.currentPos = 1;
    this.vars.tempPos = 0;
    this.vars.speed = 0.2;
    this.vars.selectButtonCounter = 0;
    this.vars.channelSelected = 1;
    this.vars.soundChannel1 = 0;
    this.vars.soundChannel2 = 1;
    this.vars.soundChannel3 = 0;
    this.vars.soundChannel4 = 1;
    this.vars.soundChannel5 = 0;
    this.vars.soundChannel6 = 0;
    this.vars.soundChannel7 = 0;
    this.vars.soundChannel8 = 0;
    this.vars.soundChannel9 = 0;
    this.broadcast("reset");
  }

  *posControl() {
    while (true) {
      if (this.vars.play == 1) {
        this.vars.currentPos += this.vars.tempPos + 1;
        this.vars.tempPos = this.vars.currentPos;
        yield* this.wait(0.1);
        this.vars.currentPos = 0;
        yield* this.wait(this.vars.speed);
        if (this.vars.tempPos == 16) {
          this.vars.tempPos = 0;
          this.vars.currentPos = 0;
        }
      }
      yield;
    }
  }

  *whenIReceiveBlink() {
    while (!!(2 == 2)) {
      this.vars.blinkLight = 1;
      yield* this.wait(0.5);
      this.vars.blinkLight = 2;
      yield* this.wait(0.5);
      yield;
    }
  }
}
