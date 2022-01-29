/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tree1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tree1", "./Tree1/costumes/tree1.svg", {
        x: 71.85378492815241,
        y: 124.40308253698777
      })
    ];

    this.sounds = [new Sound("pop", "./Tree1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];

    this.vars.speed = 38;
  }

  *whenGreenFlagClicked() {}

  *startAsClone() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
    this.size = 1;
    this.goto(this.random(-240, 240), 0);
    this.vars.speed = 1;
    for (let i = 0; i < 68; i++) {
      this.size += 0.1 * this.vars.speed;
      this.y += -0.05 * this.vars.speed;
      this.vars.speed += 1;
      if (this.x < -50) {
        this.x += -0.1 * this.vars.speed;
      }
      if (this.x > 50) {
        this.x += 0.1 * this.vars.speed;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        this.broadcast("game over");
        yield* this.wait(1);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveLeft() {
    this.x += 10;
  }

  *whenIReceiveRight() {
    this.x += -10;
  }

  *whenIReceivePlay() {
    this.visible = false;
    while (true) {
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
  }
}
