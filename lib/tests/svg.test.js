const  SVG = require("../svg");

describe("SVG Tests", () => {
  let svgLogo;

  beforeEach(() => {
    svgLogo = new SVG();
  });

  it("should create an SVG object", () => {
    expect(svgLogo).toBeInstanceOf(SVG);
  });

  it("should throw an error if shape is not set", () => {
    expect(() => svgLogo.render()).toThrow("Shape not set. Call setShape() first.");
  });

  it("should set the shape instance", () => {
    const shapeInstance = { render: jest.fn() };
    svgLogo.setShape(shapeInstance);
    expect(svgLogo.shape).toEqual(shapeInstance);
  });

  it("should set the text", () => {
    const text = "ABC";
    svgLogo.setText(text);
    expect(svgLogo.text).toBe(text);
  });

  it("should set the text color", () => {
    const textColor = "red";
    svgLogo.setTextColor(textColor);
    expect(svgLogo.textColor).toBe(textColor);
  });

  it("should render the SVG markup with shape and text", () => {
    const shapeInstance = { render: () => '<circle cx="50%" cy="50%" r="100" fill="blue" />' };
    const text = "ABC";
    const textColor = "red";

    svgLogo.setShape(shapeInstance);
    svgLogo.setText(text);
    svgLogo.setTextColor(textColor);

    const expectedSVGMarkup =
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="50%" cy="50%" r="100" fill="blue" />` +
      `<text x="150" y="100" font-size="40" text-anchor="middle" alignment-baseline="middle" fill="red">ABC</text>` +
      `</svg>`;

    expect(svgLogo.render()).toBe(expectedSVGMarkup);
  });
});
