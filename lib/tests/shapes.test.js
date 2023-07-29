const { Circle, Triangle, Square } = require("../shapes");

describe("Shapes Tests", () => {
  describe("Circle", () => {
    it("should render a valid circle SVG markup", () => {
      const circle = new Circle();
      circle.setColor("blue");
      const svgMarkup = circle.render();
      expect(svgMarkup).toContain('<circle cx="50%" cy="50%" r="100" height="100%" fill="blue" />');
    });
  });

  describe("Triangle", () => {
    it("should render a valid triangle SVG markup", () => {
      const triangle = new Triangle();
      triangle.setColor("red");
      const svgMarkup = triangle.render();
      expect(svgMarkup).toContain('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="red" />');
    });
  });

  describe("Square", () => {
    it("should render a valid square SVG markup", () => {
      const square = new Square();
      square.setColor("green");
      const svgMarkup = square.render();
      const expectedMarkup = `<rect x="50" y="0" height="200" width="200" fill="green" />`;
      expect(svgMarkup).toContain(expectedMarkup);
    });
  });
});
