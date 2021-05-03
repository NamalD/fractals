import { Triangle } from "./triangle";
import p5 from "p5";

export const drawShape = (shape: Triangle): p5 =>
  triangle(shape.left.x, shape.left.y, shape.right.x, shape.right.y, shape.top.x, shape.top.y)