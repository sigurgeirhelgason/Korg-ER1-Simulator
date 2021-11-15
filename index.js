import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import KorgEr1 from "./KorgEr1/KorgEr1.js";
import Play from "./Play/Play.js";
import Channel1 from "./Channel1/Channel1.js";
import Channel2 from "./Channel2/Channel2.js";
import Channel3 from "./Channel3/Channel3.js";
import Channel4 from "./Channel4/Channel4.js";
import Channel5 from "./Channel5/Channel5.js";
import Channel6 from "./Channel6/Channel6.js";
import Channel7 from "./Channel7/Channel7.js";
import Channel8 from "./Channel8/Channel8.js";
import Channel9 from "./Channel9/Channel9.js";
import SelectChannel from "./SelectChannel/SelectChannel.js";
import UpButton from "./UpButton/UpButton.js";
import DownButton from "./DownButton/DownButton.js";
import Stop from "./Stop/Stop.js";
import Left2 from "./Left2/Left2.js";
import Right2 from "./Right2/Right2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  KorgEr1: new KorgEr1({
    x: 0,
    y: 1,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  Play: new Play({
    x: -97,
    y: -56,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  Channel1: new Channel1({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel2: new Channel2({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel3: new Channel3({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel4: new Channel4({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel5: new Channel5({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel6: new Channel6({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel7: new Channel7({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: true
  }),
  Channel8: new Channel8({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  Channel9: new Channel9({
    x: -174,
    y: -120,
    direction: 90,
    costumeNumber: 2,
    size: 46,
    visible: false
  }),
  SelectChannel: new SelectChannel({
    x: 19,
    y: -48,
    direction: 90,
    costumeNumber: 2,
    size: 45,
    visible: true
  }),
  UpButton: new UpButton({
    x: -193,
    y: 34,
    direction: 90,
    costumeNumber: 1,
    size: 48,
    visible: true
  }),
  DownButton: new DownButton({
    x: -193,
    y: 9,
    direction: 90,
    costumeNumber: 1,
    size: 48,
    visible: true
  }),
  Stop: new Stop({
    x: -145,
    y: -56,
    direction: 90,
    costumeNumber: 1,
    size: 48,
    visible: true
  }),
  Left2: new Left2({
    x: -155,
    y: -11,
    direction: 90,
    costumeNumber: 1,
    size: 48,
    visible: true
  }),
  Right2: new Right2({
    x: -127,
    y: -11,
    direction: 90,
    costumeNumber: 1,
    size: 48,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
