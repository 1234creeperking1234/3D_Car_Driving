/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 299,
        y: 224.84376525878906
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement data_hidevariable */ null;
    this.visible = true;
  }

  *whenIReceivePlay() {
    this.visible = false;
    /* TODO: Implement data_showvariable */ null;
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }
}
