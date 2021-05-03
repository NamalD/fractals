export interface Triangle {
  left: Point;
  right: Point;
  top: Point;
}

export interface TriangleSubdivision {
  left: Triangle;
  right: Triangle;
  top: Triangle;
}

export interface Point {
  x: number;
  y: number;
}

export function equilateralTriangle(length: number, x: number, y: number): Triangle {
  const leftPoint = createPoint(x, y);
  const rightPoint = createPoint(x + length, y);

  const angle = Math.PI / 3;
  const xTransform = Math.cos(angle);
  const yTransform = Math.sin(angle);
  const topPoint = createPoint(x + length * xTransform, y - length * yTransform);

  return {
    left: leftPoint,
    right: rightPoint,
    top: topPoint
  };
}

export function subdivide(triangle: Triangle): TriangleSubdivision {
  const newLength = length(triangle) / 2;

  const leftTriangle = equilateralTriangle(newLength, triangle.left.x, triangle.left.y);
  const rightTriangle = equilateralTriangle(newLength, leftTriangle.right.x, leftTriangle.right.y);
  const topTriangle = equilateralTriangle(newLength, leftTriangle.top.x, leftTriangle.top.y);

  return {
    left: leftTriangle,
    right: rightTriangle,
    top: topTriangle,
  };
}

export function subdivideMany(triangles: Triangle[]): TriangleSubdivision[] {
  return triangles.map(triangle => subdivide(triangle));
}

export function length(triangle: Triangle): number {
  return triangle.right.x - triangle.left.x
}

export function toArray(subdivision: TriangleSubdivision): Triangle[] {
  return [subdivision.left, subdivision.right, subdivision.top];
}

export const createPoint = (x: number, y: number): Point => ({x: x, y: y});