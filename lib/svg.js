class SVG {
    constructor() {
      this.shape = null;
      this.text = '';
      this.textColor = ''; // Default text color
    }
  
    setShape(shapeInstance) {
      this.shape = shapeInstance;
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  
    render() {
      if (!this.shape) {
        throw new Error('Shape not set. Call setShape() first.');
      }
  
      // Generate SVG markup for the shape and the text
      const shapeSVG = this.shape.render();
      const textSVG = this.getTextSVG();
  
      // Combine the shape and text SVGs to create the final SVG logo
      const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;
  
      return svgContent;
    }
  
    getTextSVG() {
      const centerX = 150; // X coordinate for centering the text
      const centerY = 100; // Y coordinate for centering the text
      return `<text x="${centerX}" y="${centerY}" font-size="40" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  module.exports = SVG;
  