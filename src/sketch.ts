import { equilateralTriangle, mid, Triangle, length, subDivide, TriangleSubdivisions } from "./triangle";
import { drawShape } from "./drawing";

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);

  const bottomLeft = 0;

  // TODO: Loop
  // TODO: Only draw next generation on render (instead of all generations)
  // n = 0
  stroke("black")
  const seedTriangle = equilateralTriangle(width, bottomLeft, height);
  drawShape(seedTriangle);

  // n = 1
  const nextTriangles = subDivide(seedTriangle);
  drawSubdivisions(nextTriangles);

  // n = 2
  drawSubdivisions(subDivide(nextTriangles.left));
  drawSubdivisions(subDivide(nextTriangles.right));
  drawSubdivisions(subDivide(nextTriangles.top));
}

function drawSubdivisions(subdivisions: TriangleSubdivisions) {
  stroke("red")
  drawShape(subdivisions.left);

  stroke("blue")
  drawShape(subdivisions.right);

  stroke("green")
  drawShape(subdivisions.top);
}

window.setup = setup;
window.draw = draw;
