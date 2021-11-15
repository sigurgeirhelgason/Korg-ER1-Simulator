/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Channel5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Channel5/costumes/button1.png", {
        x: 44,
        y: 65
      }),
      new Costume("button3", "./Channel5/costumes/button3.png", {
        x: 44,
        y: 65
      })
    ];

    this.sounds = [
      new Sound(
        "SD-ER1-70sSnareNice",
        "./Channel5/sounds/SD-ER1-70sSnareNice.wav"
      ),
      new Sound(
        "SD-ER1-70sSnareNiceLonger",
        "./Channel5/sounds/SD-ER1-70sSnareNiceLonger.wav"
      ),
      new Sound(
        "SD-ER1-BeatboxLullig",
        "./Channel5/sounds/SD-ER1-BeatboxLullig.wav"
      ),
      new Sound(
        "SD-ER1-BeatboxLullig2",
        "./Channel5/sounds/SD-ER1-BeatboxLullig2.wav"
      ),
      new Sound(
        "SD-ER1-BeatboxLullig3",
        "./Channel5/sounds/SD-ER1-BeatboxLullig3.wav"
      ),
      new Sound("SD-ER1-Borstel", "./Channel5/sounds/SD-ER1-Borstel.wav"),
      new Sound(
        "SD-ER1-Cardboardbox",
        "./Channel5/sounds/SD-ER1-Cardboardbox.wav"
      ),
      new Sound(
        "SD-ER1-Chaozzzzzzz",
        "./Channel5/sounds/SD-ER1-Chaozzzzzzz.wav"
      ),
      new Sound(
        "SD-ER1-Chaozzzzzzz2",
        "./Channel5/sounds/SD-ER1-Chaozzzzzzz2.wav"
      ),
      new Sound(
        "SD-ER1-ClappishSnare1",
        "./Channel5/sounds/SD-ER1-ClappishSnare1.wav"
      ),
      new Sound(
        "SD-ER1-ClappishSnare2",
        "./Channel5/sounds/SD-ER1-ClappishSnare2.wav"
      ),
      new Sound(
        "SD-ER1-Commodore64Snare",
        "./Channel5/sounds/SD-ER1-Commodore64Snare.wav"
      ),
      new Sound(
        "SD-ER1-Commodore64Snare2",
        "./Channel5/sounds/SD-ER1-Commodore64Snare2.wav"
      ),
      new Sound(
        "SD-ER1-Commodore64Snare3",
        "./Channel5/sounds/SD-ER1-Commodore64Snare3.wav"
      ),
      new Sound(
        "SD-ER1-DigitalClaptrap",
        "./Channel5/sounds/SD-ER1-DigitalClaptrap.wav"
      ),
      new Sound(
        "SD-ER1-DigitalClaptrap2",
        "./Channel5/sounds/SD-ER1-DigitalClaptrap2.wav"
      ),
      new Sound("SD-ER1-Drupy1", "./Channel5/sounds/SD-ER1-Drupy1.wav"),
      new Sound("SD-ER1-Drupy2long", "./Channel5/sounds/SD-ER1-Drupy2long.wav"),
      new Sound("SD-ER1-Drupy3long", "./Channel5/sounds/SD-ER1-Drupy3long.wav"),
      new Sound("SD-ER1-Drupy5high", "./Channel5/sounds/SD-ER1-Drupy5high.wav"),
      new Sound("SD-ER1-EasyFluppy", "./Channel5/sounds/SD-ER1-EasyFluppy.wav"),
      new Sound(
        "SD-ER1-FancyFluppyyy",
        "./Channel5/sounds/SD-ER1-FancyFluppyyy.wav"
      ),
      new Sound("SD-ER1-Fluppy1", "./Channel5/sounds/SD-ER1-Fluppy1.wav"),
      new Sound(
        "SD-ER1-Fluppy2long",
        "./Channel5/sounds/SD-ER1-Fluppy2long.wav"
      ),
      new Sound("SD-ER1-Fluppy3", "./Channel5/sounds/SD-ER1-Fluppy3.wav"),
      new Sound(
        "SD-ER1-Fluppy5short",
        "./Channel5/sounds/SD-ER1-Fluppy5short.wav"
      ),
      new Sound("SD-ER1-FoxyFluppy", "./Channel5/sounds/SD-ER1-FoxyFluppy.wav"),
      new Sound(
        "SD-ER1-HomelessFluppy",
        "./Channel5/sounds/SD-ER1-HomelessFluppy.wav"
      ),
      new Sound(
        "SD-ER1-Japanese70s",
        "./Channel5/sounds/SD-ER1-Japanese70s.wav"
      ),
      new Sound("SD-ER1-Knaspio1", "./Channel5/sounds/SD-ER1-Knaspio1.wav"),
      new Sound("SD-ER1-Knaspio2", "./Channel5/sounds/SD-ER1-Knaspio2.wav"),
      new Sound(
        "SD-ER1-Lonnnnnnnng",
        "./Channel5/sounds/SD-ER1-Lonnnnnnnng.wav"
      ),
      new Sound(
        "SD-ER1-MiddleClassFluppy",
        "./Channel5/sounds/SD-ER1-MiddleClassFluppy.wav"
      ),
      new Sound("SD-ER1-Sensual", "./Channel5/sounds/SD-ER1-Sensual.wav"),
      new Sound("SD-ER1-Shorto", "./Channel5/sounds/SD-ER1-Shorto.wav"),
      new Sound("SD-ER1-Shorto2", "./Channel5/sounds/SD-ER1-Shorto2.wav"),
      new Sound("SD-ER1-SIDenv1", "./Channel5/sounds/SD-ER1-SIDenv1.wav"),
      new Sound(
        "SD-ER1-SnakeCharmer",
        "./Channel5/sounds/SD-ER1-SnakeCharmer.wav"
      ),
      new Sound("SD-ER1-SpyVSspy", "./Channel5/sounds/SD-ER1-SpyVSspy.wav"),
      new Sound("SD-ER1-SpyVSspy2", "./Channel5/sounds/SD-ER1-SpyVSspy2.wav"),
      new Sound("SD-ER1-VCS2600", "./Channel5/sounds/SD-ER1-VCS2600.wav"),
      new Sound("SD-ER1-VCS26002", "./Channel5/sounds/SD-ER1-VCS26002.wav"),
      new Sound("SD-ER1-VCS26003", "./Channel5/sounds/SD-ER1-VCS26003.wav"),
      new Sound("SD-ER1-Wasknijper", "./Channel5/sounds/SD-ER1-Wasknijper.wav"),
      new Sound(
        "SD-ER1-Wasknijper2",
        "./Channel5/sounds/SD-ER1-Wasknijper2.wav"
      ),
      new Sound("SD-ER1-WhipMiami", "./Channel5/sounds/SD-ER1-WhipMiami.wav"),
      new Sound(
        "SD-ER1-WhipMiamiThick",
        "./Channel5/sounds/SD-ER1-WhipMiamiThick.wav"
      ),
      new Sound("SD-ER1-Whipup", "./Channel5/sounds/SD-ER1-Whipup.wav"),
      new Sound("SD-ER1-Whipup2", "./Channel5/sounds/SD-ER1-Whipup2.wav"),
      new Sound("SD-ER1-Whipup3", "./Channel5/sounds/SD-ER1-Whipup3.wav"),
      new Sound("SD-ER1-Whipup5", "./Channel5/sounds/SD-ER1-Whipup5.wav"),
      new Sound("SD-ER1-Whipup6", "./Channel5/sounds/SD-ER1-Whipup6.wav"),
      new Sound("SD-ER1-Whipup7", "./Channel5/sounds/SD-ER1-Whipup7.wav"),
      new Sound("SD-ER1-Whipup8", "./Channel5/sounds/SD-ER1-Whipup8.wav"),
      new Sound("SD-ER1-Whipup9", "./Channel5/sounds/SD-ER1-Whipup9.wav"),
      new Sound("SD-ER1-Whipup10", "./Channel5/sounds/SD-ER1-Whipup10.wav"),
      new Sound("SD-ER-BagOgrind", "./Channel5/sounds/SD-ER-BagOgrind.wav"),
      new Sound(
        "SD-ER-MetallicSnarezzz",
        "./Channel5/sounds/SD-ER-MetallicSnarezzz.wav"
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
        { name: "channel_5" },
        this.whenIReceiveChannel5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play_once" },
        this.whenIReceivePlayOnce
      )
    ];

    this.vars.buttonNo5 = 1;
    this.vars.pressed5 = 1;
    this.vars.channelNo5 = 5;
  }

  *startAsClone() {
    this.x += 24.5;
    this.vars.buttonNo5 += 1;
    this.stage.vars.noteButtonsCounter += 1;
    if (this.stage.vars.noteButtonsCounter < 16) {
      this.createClone();
    } else {
      this.broadcast("channel_6");
    }
    yield* this.playControl();
  }

  *whenIReceiveReset() {
    this.costume = "button1";
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.vars.pressed5 = 2;
      this.costume = this.vars.pressed5;
    } else {
      this.vars.pressed5 = 1;
      this.costume = this.vars.pressed5;
    }
  }

  *playControl() {
    while (true) {
      yield* this.blinkControl();
      if (this.stage.vars.currentPos == this.vars.buttonNo5) {
        this.costume = "button3";
        if (this.vars.pressed5 == 2 && this.stage.vars.play == 1) {
          yield* this.playSound();
        }
      } else {
        this.costume = this.vars.pressed5;
      }
      yield;
    }
  }

  *playSound() {
    this.costume = this.vars.pressed5;
    yield* this.playSoundUntilDone(this.stage.vars.soundChannel5);
  }

  *blinkControl() {
    if (
      this.stage.vars.currentPos == this.vars.buttonNo5 &&
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
    if (this.vars.channelNo5 == this.stage.vars.channelSelected) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveChannel5() {
    this.goto(-174, -120);
    this.createClone();
    this.stage.vars.noteButtonsCounter = 1;
    this.vars.buttonNo5 = 1;
    this.vars.pressed5 = 1;
    this.vars.channelNo5 = 5;
    yield* this.playControl();
  }

  *whenIReceivePlayOnce() {
    if (this.stage.vars.channelSelected == this.vars.channelNo5) {
      yield* this.playSoundUntilDone(this.stage.vars.soundChannel5);
    }
  }
}
