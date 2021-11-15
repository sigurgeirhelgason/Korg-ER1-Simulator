/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel2/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel2/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound("BD-ER1-90sTrance", "./Channel2/sounds/BD-ER1-90sTrance.wav"),
      new Sound("BD-ER1-90sTrance2", "./Channel2/sounds/BD-ER1-90sTrance2.wav"),
      new Sound(
        "BD-ER1-90sTrance2longdecay",
        "./Channel2/sounds/BD-ER1-90sTrance2longdecay.wav"
      ),
      new Sound("BD-ER1-808ish1", "./Channel2/sounds/BD-ER1-808ish1.wav"),
      new Sound("BD-ER1-808ish2", "./Channel2/sounds/BD-ER1-808ish2.wav"),
      new Sound("BD-ER1-808ish3", "./Channel2/sounds/BD-ER1-808ish3.wav"),
      new Sound(
        "BD-ER1-908-uhhhhhhh",
        "./Channel2/sounds/BD-ER1-908-uhhhhhhh.wav"
      ),
      new Sound("BD-ER1-909iooo", "./Channel2/sounds/BD-ER1-909iooo.wav"),
      new Sound("BD-ER1-CR8000ish", "./Channel2/sounds/BD-ER1-CR8000ish.wav"),
      new Sound(
        "BD-ER1-CR8000ishMoreDecay",
        "./Channel2/sounds/BD-ER1-CR8000ishMoreDecay.wav"
      ),
      new Sound(
        "BD-ER1-CR8000ishMostDecay",
        "./Channel2/sounds/BD-ER1-CR8000ishMostDecay.wav"
      ),
      new Sound("BD-ER1-GoaKick", "./Channel2/sounds/BD-ER1-GoaKick.wav"),
      new Sound(
        "BD-ER1-GoaKickLongDecay",
        "./Channel2/sounds/BD-ER1-GoaKickLongDecay.wav"
      ),
      new Sound("BD-ER1-Hotmix95", "./Channel2/sounds/BD-ER1-Hotmix95.wav"),
      new Sound(
        "BD-ER1-Hotmix95laser",
        "./Channel2/sounds/BD-ER1-Hotmix95laser.wav"
      ),
      new Sound(
        "BD-ER1-Hotmix95trance",
        "./Channel2/sounds/BD-ER1-Hotmix95trance.wav"
      ),
      new Sound("BD-ER1-LazerBD1", "./Channel2/sounds/BD-ER1-LazerBD1.wav"),
      new Sound("BD-ER1-LazerBD2", "./Channel2/sounds/BD-ER1-LazerBD2.wav"),
      new Sound("BD-ER1-LazerBD3", "./Channel2/sounds/BD-ER1-LazerBD3.wav"),
      new Sound("BD-ER1-LazerBD5", "./Channel2/sounds/BD-ER1-LazerBD5.wav"),
      new Sound("BD-ER1-Snuiter1", "./Channel2/sounds/BD-ER1-Snuiter1.wav"),
      new Sound("BD-ER1-Stump", "./Channel2/sounds/BD-ER1-Stump.wav")
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
        { name: "channel_2" },
        this.whenIReceiveChannel2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo2 = 1;
    this.vars.pressed2 = 1;
    this.vars.channelNo2 = 2;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo2 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_3");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed2 = 2;
      this.costume = this.vars.pressed2;
    } else {
      this.vars.pressed2 = 1;
      this.costume = this.vars.pressed2;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo2) {
        this.costume = "button3";
        if (this.vars.pressed2 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed2;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed2;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel2);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo2 &&
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
    if (this.vars.channelNo2 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel2() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter += 1;
    this.vars.buttonNo2 = 1;
    this.vars.pressed2 = 1;
    this.vars.channelNo2 = 2;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo2) {
      yield* this.startSound(this.stage.vars.soundChannel2);
    }
  }
}
