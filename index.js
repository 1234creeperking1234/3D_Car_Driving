import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Tree1 from "./Tree1/Tree1.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Tree1: new Tree1({
    x: -33,
    y: -35.15,
    direction: 90,
    costumeNumber: 1,
    size: 73.71667526883066,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: 118.99999472300244,
    y: -142.99998550415162,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: 181.38128047807595,
    y: -140.66511177045248,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
