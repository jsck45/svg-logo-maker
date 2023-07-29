class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented in subclasses.');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      const squareSize = 200;
      const x = (300 - squareSize) / 2;
      const y = (200 - squareSize) / 2;
      return `<rect x="${x}" y="${y}" height="${squareSize}" width="${squareSize}" fill="${this.color}" />`;
    }
  }
  
  
  module.exports = { Circle, Triangle, Square };
  