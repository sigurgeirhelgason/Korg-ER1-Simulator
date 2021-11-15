/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SelectChannel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2_1", "./SelectChannel/costumes/button2_1.png", {
        x: 37,
        y: 59
      }),
      new Costume("button2_2", "./SelectChannel/costumes/button2_2.png", {
        x: 37,
        y: 58
      })
    ];

    this.sounds = [
      new Sound("HH-ER1-909open", "./SelectChannel/sounds/HH-ER1-909open.wav"),
      new Sound(
        "HH-ER1-909openDrunkz",
        "./SelectChannel/sounds/HH-ER1-909openDrunkz.wav"
      ),
      new Sound(
        "HH-ER1-BassieHat",
        "./SelectChannel/sounds/HH-ER1-BassieHat.wav"
      ),
      new Sound("HH-ER1-Beatbox", "./SelectChannel/sounds/HH-ER1-Beatbox.wav"),
      new Sound(
        "HH-ER1-ClosedHardHatz",
        "./SelectChannel/sounds/HH-ER1-ClosedHardHatz.wav"
      ),
      new Sound(
        "HH-ER1-HardHatz",
        "./SelectChannel/sounds/HH-ER1-HardHatz.wav"
      ),
      new Sound(
        "HH-ER1-MicroHat",
        "./SelectChannel/sounds/HH-ER1-MicroHat.wav"
      ),
      new Sound(
        "HH-ER1-ShortSample",
        "./SelectChannel/sounds/HH-ER1-ShortSample.wav"
      ),
      new Sound(
        "HH-ER1-Splaszhat",
        "./SelectChannel/sounds/HH-ER1-Splaszhat.wav"
      ),
      new Sound(
        "HH-ER1-TunaMelt",
        "./SelectChannel/sounds/HH-ER1-TunaMelt.wav"
      ),
      new Sound(
        "HH-ER1-TunaMelt2",
        "./SelectChannel/sounds/HH-ER1-TunaMelt2.wav"
      ),
      new Sound(
        "HH-ER1-TunaMelt3",
        "./SelectChannel/sounds/HH-ER1-TunaMelt3.wav"
      ),
      new Sound(
        "HH-ER-ActionHat",
        "./SelectChannel/sounds/HH-ER-ActionHat.wav"
      ),
      new Sound(
        "HH-ER-GrimpyHat",
        "./SelectChannel/sounds/HH-ER-GrimpyHat.wav"
      ),
      new Sound("HH-ER-MuddyHat", "./SelectChannel/sounds/HH-ER-MuddyHat.wav"),
      new Sound("HH-ER-Ringhat", "./SelectChannel/sounds/HH-ER-Ringhat.wav"),
      new Sound("HH-ER-ShortyHat", "./SelectChannel/sounds/HH-ER-ShortyHat.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.buttonNo10 = 1;
  }

  *whenGreenFlagClicked() {
    this.goto(19, -48);
    this.stage.vars.selectButtonCounter = 1;
    this.vars.buttonNo10 = 1;
    this.createClone();
    while (true) {
      if (this.stage.vars.channelSelected == this.vars.buttonNo10) {
        this.costume = "button2_2";
      } else {
        this.costume = "button2_1";
      }
      yield;
    }
  }

  *startAsClone() {
    this.stage.vars.selectButtonCounter += 1;
    this.vars.buttonNo10 += 1;
    this.x += 21.7;
    if (this.stage.vars.noteButtonsCounter < 7) {
      this.createClone();
    }
    while (true) {
      if (this.stage.vars.channelSelected == this.vars.buttonNo10) {
        this.costume = "button2_2";
      } else {
        this.costume = "button2_1";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.channelSelected = this.vars.buttonNo10;
    this.broadcast("channel_select");
    this.broadcast("play_once");
  }
}
