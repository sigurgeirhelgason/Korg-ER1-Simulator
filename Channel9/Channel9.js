/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel9/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel9/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound(
        "FX-ER1-BleepSweepz",
        "./Channel9/sounds/FX-ER1-BleepSweepz.wav"
      ),
      new Sound("FX-ER1-FModel500", "./Channel9/sounds/FX-ER1-FModel500.wav"),
      new Sound("FX-ER1-LazerFishy", "./Channel9/sounds/FX-ER1-LazerFishy.wav"),
      new Sound(
        "FX-ER1-LazerLowThick",
        "./Channel9/sounds/FX-ER1-LazerLowThick.wav"
      ),
      new Sound("FX-ER1-Randomni1", "./Channel9/sounds/FX-ER1-Randomni1.wav"),
      new Sound("FX-ER1-Robobreak", "./Channel9/sounds/FX-ER1-Robobreak.wav"),
      new Sound("FX-ER1-Shakerz", "./Channel9/sounds/FX-ER1-Shakerz.wav"),
      new Sound("FX-ER1-SubSwooper", "./Channel9/sounds/FX-ER1-SubSwooper.wav"),
      new Sound("FX-ER1-Woodzblox", "./Channel9/sounds/FX-ER1-Woodzblox.wav"),
      new Sound(
        "FX-ER1-WoodzbloxDropletz",
        "./Channel9/sounds/FX-ER1-WoodzbloxDropletz.wav"
      ),
      new Sound("FX-ER-Birdzzz", "./Channel9/sounds/FX-ER-Birdzzz.wav"),
      new Sound("FX-ER-CompuCasta", "./Channel9/sounds/FX-ER-CompuCasta.wav"),
      new Sound(
        "FX-ER-Kraftwerkcity",
        "./Channel9/sounds/FX-ER-Kraftwerkcity.wav"
      ),
      new Sound(
        "FX-ER-Kraftwerkcity2",
        "./Channel9/sounds/FX-ER-Kraftwerkcity2.wav"
      ),
      new Sound(
        "FX-ER-Kraftwerkcity3",
        "./Channel9/sounds/FX-ER-Kraftwerkcity3.wav"
      ),
      new Sound(
        "FX-ER-Kraftwerkcity5",
        "./Channel9/sounds/FX-ER-Kraftwerkcity5.wav"
      ),
      new Sound(
        "FX-ER-Kraftwerkcity6almost",
        "./Channel9/sounds/FX-ER-Kraftwerkcity6almost.wav"
      ),
      new Sound(
        "FX-ER-KraftwerkRobo1",
        "./Channel9/sounds/FX-ER-KraftwerkRobo1.wav"
      ),
      new Sound(
        "FX-ER-KraftwerkRobo2",
        "./Channel9/sounds/FX-ER-KraftwerkRobo2.wav"
      ),
      new Sound(
        "FX-ER-KraftwerkRobo3",
        "./Channel9/sounds/FX-ER-KraftwerkRobo3.wav"
      ),
      new Sound("FX-ER-Pwiiiiup", "./Channel9/sounds/FX-ER-Pwiiiiup.wav"),
      new Sound("FX-ER-RoboPop", "./Channel9/sounds/FX-ER-RoboPop.wav"),
      new Sound("FX-ER-RoboPop2", "./Channel9/sounds/FX-ER-RoboPop2.wav"),
      new Sound("FX-ER-RoboWavezzz", "./Channel9/sounds/FX-ER-RoboWavezzz.wav"),
      new Sound(
        "FX-ER-RoboWavezzz2",
        "./Channel9/sounds/FX-ER-RoboWavezzz2.wav"
      ),
      new Sound("FX-ER-Sonario", "./Channel9/sounds/FX-ER-Sonario.wav"),
      new Sound("FX-ER-Spacey", "./Channel9/sounds/FX-ER-Spacey.wav"),
      new Sound(
        "FX-ER-VillageBellz",
        "./Channel9/sounds/FX-ER-VillageBellz.wav"
      ),
      new Sound("FX-ER-Wanderer", "./Channel9/sounds/FX-ER-Wanderer.wav")
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
        { name: "channel_9" },
        this.whenIReceiveChannel9
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo9 = 1;
    this.vars.pressed9 = 1;
    this.vars.channelNo9 = 9;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo9 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed9 = 2;
      this.costume = this.vars.pressed9;
    } else {
      this.vars.pressed9 = 1;
      this.costume = this.vars.pressed9;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo9) {
        this.costume = "button3";
        if (this.vars.pressed9 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed9;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed9;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel9);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo9 &&
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
    if (this.vars.channelNo9 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel9() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo9 = 1;
    this.vars.pressed9 = 1;
    this.vars.channelNo9 = 9;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo9) {
      yield* this.playSoundUntilDone(this.stage.vars.soundChannel9);
    }
  }
}
