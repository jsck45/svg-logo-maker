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
      const height = 200;
      const base = (height * 2) / Math.sqrt(3);
      const x1 = (300 - base) / 2;
      const x2 = x1 + base / 2;
      const x3 = x1 + base;
      const y = (200 - height) / 2;
  
      return `<polygon points="${x1},${y + height} ${x2},${y} ${x3},${y + height}" fill="${this.color}" />`;
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
  