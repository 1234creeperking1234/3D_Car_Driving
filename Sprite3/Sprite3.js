/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 88.77645012048043,
        y: 4.8437649999999906
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];
  }

  *whenGreenFlagClicked() {}

  *whenGreenFlagClicked2() {}

  *whenIReceivePlay() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("left");
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    while (true) {
      if (this.stage.vars.mobileSupport == 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
