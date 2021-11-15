/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KorgEr1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("korg-er1", "./KorgEr1/costumes/korg-er1.png", {
        x: 480,
        y: 346.5
      }),
      new Costume(
        "korg-er1_with_buttons",
        "./KorgEr1/costumes/korg-er1_with_buttons.png",
        { x: 480, y: 346.5 }
      ),
      new Costume("korg-er1_2", "./KorgEr1/costumes/korg-er1_2.png", {
        x: 480,
        y: 346.5
      })
    ];

    this.sounds = [
      new Sound("HH-ER1-909open", "./KorgEr1/sounds/HH-ER1-909open.wav"),
      new Sound(
        "HH-ER1-909openDrunkz",
        "./KorgEr1/sounds/HH-ER1-909openDrunkz.wav"
      ),
      new Sound("HH-ER1-BassieHat", "./KorgEr1/sounds/HH-ER1-BassieHat.wav"),
      new Sound("HH-ER1-Beatbox", "./KorgEr1/sounds/HH-ER1-Beatbox.wav"),
      new Sound(
        "HH-ER1-ClosedHardHatz",
        "./KorgEr1/sounds/HH-ER1-ClosedHardHatz.wav"
      ),
      new Sound("HH-ER1-HardHatz", "./KorgEr1/sounds/HH-ER1-HardHatz.wav"),
      new Sound("HH-ER1-MicroHat", "./KorgEr1/sounds/HH-ER1-MicroHat.wav"),
      new Sound(
        "HH-ER1-ShortSample",
        "./KorgEr1/sounds/HH-ER1-ShortSample.wav"
      ),
      new Sound("HH-ER1-Splaszhat", "./KorgEr1/sounds/HH-ER1-Splaszhat.wav"),
      new Sound("HH-ER1-TunaMelt", "./KorgEr1/sounds/HH-ER1-TunaMelt.wav"),
      new Sound("HH-ER1-TunaMelt2", "./KorgEr1/sounds/HH-ER1-TunaMelt2.wav"),
      new Sound("HH-ER1-TunaMelt3", "./KorgEr1/sounds/HH-ER1-TunaMelt3.wav"),
      new Sound("HH-ER-ActionHat", "./KorgEr1/sounds/HH-ER-ActionHat.wav"),
      new Sound("HH-ER-GrimpyHat", "./KorgEr1/sounds/HH-ER-GrimpyHat.wav"),
      new Sound("HH-ER-MuddyHat", "./KorgEr1/sounds/HH-ER-MuddyHat.wav"),
      new Sound("HH-ER-Ringhat", "./KorgEr1/sounds/HH-ER-Ringhat.wav"),
      new Sound("HH-ER-ShortyHat", "./KorgEr1/sounds/HH-ER-ShortyHat.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 1);
    /* TODO: Implement looks_gotofrontback */ null;
  }
}
