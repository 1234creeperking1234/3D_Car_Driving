/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ahead", "./Sprite1/costumes/ahead.svg", {
        x: 334.61856500000005,
        y: 274.10415662332326
      }),
      new Costume("left", "./Sprite1/costumes/left.svg", {
        x: 334.61858500000005,
        y: 274.1041492299871
      }),
      new Costume("right", "./Sprite1/costumes/right.svg", {
        x: 334.61858500000005,
        y: 274.1041568366509
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenIReceiveRight() {
    this.costume = "right";
  }

  *whenIReceiveLeft() {
    this.costume = "left";
  }

  *whenIReceivePlay() {
    while (true) {
      this.costume = "ahead";
      if (this.keyPressed("right arrow")) {
        this.costume = "right";
        this.broadcast("right");
      }
      if (this.keyPressed("left arrow")) {
        this.costume = "left";
        this.broadcast("left");
      }
      yield;
    }
  }
}
