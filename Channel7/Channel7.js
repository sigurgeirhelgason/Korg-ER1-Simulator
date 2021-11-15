/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel7/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel7/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound("TOM-ER-DiscoTom", "./Channel7/sounds/TOM-ER-DiscoTom.wav"),
      new Sound("TOM-ER-FinlandTom", "./Channel7/sounds/TOM-ER-FinlandTom.wav"),
      new Sound(
        "TOM-ER-FinlandTom2",
        "./Channel7/sounds/TOM-ER-FinlandTom2.wav"
      ),
      new Sound(
        "TOM-ER-FinlandTom3",
        "./Channel7/sounds/TOM-ER-FinlandTom3.wav"
      ),
      new Sound("TOM-ER-GoodTom", "./Channel7/sounds/TOM-ER-GoodTom.wav"),
      new Sound("TOM-ER-GoodTom2", "./Channel7/sounds/TOM-ER-GoodTom2.wav"),
      new Sound("TOM-ER-GoodTom3", "./Channel7/sounds/TOM-ER-GoodTom3.wav"),
      new Sound(
        "TOM-ER-MetallioTom",
        "./Channel7/sounds/TOM-ER-MetallioTom.wav"
      ),
      new Sound("TOM-ER-MicroTom1", "./Channel7/sounds/TOM-ER-MicroTom1.wav"),
      new Sound("TOM-ER-MicroTom2", "./Channel7/sounds/TOM-ER-MicroTom2.wav")
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
        { name: "channel_7" },
        this.whenIReceiveChannel7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo7 = 1;
    this.vars.pressed7 = 1;
    this.vars.channelNo7 = 7;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo7 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_8");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed7 = 2;
      this.costume = this.vars.pressed7;
    } else {
      this.vars.pressed7 = 1;
      this.costume = this.vars.pressed7;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo7) {
        this.costume = "button3";
        if (this.vars.pressed7 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed7;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed7;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel7);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo7 &&
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
    if (this.vars.channelNo7 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel7() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo7 = 1;
    this.vars.pressed7 = 1;
    this.vars.channelNo7 = 7;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo7) {
      yield* this.playSoundUntilDone(this.stage.vars.soundChannel7);
    }
  }
}
