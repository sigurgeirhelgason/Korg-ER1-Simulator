/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel3/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel3/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound("HH-ER1-909open", "./Channel3/sounds/HH-ER1-909open.wav"),
      new Sound(
        "HH-ER1-909openDrunkz",
        "./Channel3/sounds/HH-ER1-909openDrunkz.wav"
      ),
      new Sound("HH-ER1-BassieHat", "./Channel3/sounds/HH-ER1-BassieHat.wav"),
      new Sound("HH-ER1-Beatbox", "./Channel3/sounds/HH-ER1-Beatbox.wav"),
      new Sound(
        "HH-ER1-ClosedHardHatz",
        "./Channel3/sounds/HH-ER1-ClosedHardHatz.wav"
      ),
      new Sound("HH-ER1-HardHatz", "./Channel3/sounds/HH-ER1-HardHatz.wav"),
      new Sound("HH-ER1-MicroHat", "./Channel3/sounds/HH-ER1-MicroHat.wav"),
      new Sound(
        "HH-ER1-ShortSample",
        "./Channel3/sounds/HH-ER1-ShortSample.wav"
      ),
      new Sound("HH-ER1-Splaszhat", "./Channel3/sounds/HH-ER1-Splaszhat.wav"),
      new Sound("HH-ER1-TunaMelt", "./Channel3/sounds/HH-ER1-TunaMelt.wav"),
      new Sound("HH-ER1-TunaMelt2", "./Channel3/sounds/HH-ER1-TunaMelt2.wav"),
      new Sound("HH-ER1-TunaMelt3", "./Channel3/sounds/HH-ER1-TunaMelt3.wav"),
      new Sound("HH-ER-ActionHat", "./Channel3/sounds/HH-ER-ActionHat.wav"),
      new Sound("HH-ER-GrimpyHat", "./Channel3/sounds/HH-ER-GrimpyHat.wav"),
      new Sound("HH-ER-MuddyHat", "./Channel3/sounds/HH-ER-MuddyHat.wav"),
      new Sound("HH-ER-Ringhat", "./Channel3/sounds/HH-ER-Ringhat.wav"),
      new Sound("HH-ER-ShortyHat", "./Channel3/sounds/HH-ER-ShortyHat.wav")
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
        { name: "channel_3" },
        this.whenIReceiveChannel3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo3 = 1;
    this.vars.pressed3 = 1;
    this.vars.channelNo3 = 3;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo3 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_4");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed3 = 2;
      this.costume = this.vars.pressed3;
    } else {
      this.vars.pressed3 = 1;
      this.costume = this.vars.pressed3;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo3) {
        this.costume = "button3";
        if (this.vars.pressed3 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed3;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed3;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel3);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo3 &&
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
    if (this.vars.channelNo3 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel3() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo3 = 1;
    this.vars.pressed3 = 1;
    this.vars.channelNo3 = 3;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo3) {
      yield* this.startSound(this.stage.vars.soundChannel3);
    }
  }
}
