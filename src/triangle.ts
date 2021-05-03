export interface Triangle {
  left: Point;
  right: Point;
  top: Point;
}

// TODO: Generic left/right/top interface
export interface TriangleSubdivisions {
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

export function subDivide(triangle: Triangle): TriangleSubdivisions {
  const newLength = length(triangle) / 2;

  const leftTriangle = equilateralTriangle(newLength, triangle.left.x, triangle.left.y);
  const rightTriangle = equilateralTriangle(newLength, leftTriangle.right.x, leftTriangle.right.y);
  const topTriangle = equilateralTriangle(newLength, leftTriangle.top.x, leftTriangle.top.y);

  return {
    left: leftTriangle,
    right: rightTriangle,
    top: topTriangle
  };
}

export function length(triangle: Triangle): number {
  return triangle.right.x - triangle.left.x
}

export const createPoint = (x: number, y: number): Point => ({ x: x, y: y });
export const mid = (value: number) => value / 2;