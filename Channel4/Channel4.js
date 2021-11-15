/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel4/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel4/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound("HH-ER1-909open", "./Channel4/sounds/HH-ER1-909open.wav"),
      new Sound(
        "HH-ER1-909openDrunkz",
        "./Channel4/sounds/HH-ER1-909openDrunkz.wav"
      ),
      new Sound("HH-ER1-BassieHat", "./Channel4/sounds/HH-ER1-BassieHat.wav"),
      new Sound("HH-ER1-Beatbox", "./Channel4/sounds/HH-ER1-Beatbox.wav"),
      new Sound(
        "HH-ER1-ClosedHardHatz",
        "./Channel4/sounds/HH-ER1-ClosedHardHatz.wav"
      ),
      new Sound("HH-ER1-HardHatz", "./Channel4/sounds/HH-ER1-HardHatz.wav"),
      new Sound("HH-ER1-MicroHat", "./Channel4/sounds/HH-ER1-MicroHat.wav"),
      new Sound(
        "HH-ER1-ShortSample",
        "./Channel4/sounds/HH-ER1-ShortSample.wav"
      ),
      new Sound("HH-ER1-TunaMelt", "./Channel4/sounds/HH-ER1-TunaMelt.wav"),
      new Sound("HH-ER1-Splaszhat", "./Channel4/sounds/HH-ER1-Splaszhat.wav"),
      new Sound("HH-ER1-TunaMelt2", "./Channel4/sounds/HH-ER1-TunaMelt2.wav"),
      new Sound("HH-ER1-TunaMelt3", "./Channel4/sounds/HH-ER1-TunaMelt3.wav"),
      new Sound("HH-ER-ActionHat", "./Channel4/sounds/HH-ER-ActionHat.wav"),
      new Sound("HH-ER-GrimpyHat", "./Channel4/sounds/HH-ER-GrimpyHat.wav"),
      new Sound("HH-ER-MuddyHat", "./Channel4/sounds/HH-ER-MuddyHat.wav"),
      new Sound("HH-ER-Ringhat", "./Channel4/sounds/HH-ER-Ringhat.wav"),
      new Sound("HH-ER-ShortyHat", "./Channel4/sounds/HH-ER-ShortyHat.wav")
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
        { name: "channel_4" },
        this.whenIReceiveChannel4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo4 = 1;
    this.vars.pressed4 = 1;
    this.vars.channelNo4 = 4;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo4 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_5");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed4 = 2;
      this.costume = this.vars.pressed4;
    } else {
      this.vars.pressed4 = 1;
      this.costume = this.vars.pressed4;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo4) {
        this.costume = "button3";
        if (this.vars.pressed4 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed4;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed4;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel4);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo4 &&
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
    if (this.vars.channelNo4 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel4() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo4 = 1;
    this.vars.pressed4 = 1;
    this.vars.channelNo4 = 4;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo4) {
      yield* this.startSound(this.stage.vars.soundChannel4);
    }
  }
}
