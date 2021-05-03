import {
  equilateralTriangle,
  Triangle,
  TriangleSubdivision,
  subdivideMany,
  toArray,
} from "./triangle";
import { drawShape } from "./drawing";

const MAX_ITERATIONS = 7;

let iteration = 0;
let parents: Triangle[];
let subdivisions: TriangleSubdivision[];

function setup() {
  createCanvas(600, 600);
  frameRate(2);

  const bottomLeft = 0;
  const seedTriangle = equilateralTriangle(width, bottomLeft, height);
  parents = [seedTriangle];
}

function draw() {
  background(255);

  iteration++;
  subdivisions = subdivideMany(parents);
  parents = subdivisions.flatMap(toArray)

  drawSubdivisions(subdivisions);

  if (iteration === MAX_ITERATIONS)
    noLoop();
}

function drawSubdivision(subdivision: TriangleSubdivision) {
  fill("red")
  drawShape(subdivision.left);
  drawShape(subdivision.right);
  drawShape(subdivision.top);
}

function drawSubdivisions(subdivisions: TriangleSubdivision[]) {
  subdivisions.forEach(subdivision => drawSubdivision(subdivision));
}

window.setup = setup;
window.draw = draw;
