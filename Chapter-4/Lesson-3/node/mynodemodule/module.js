class Color {
  constructor(name, color) {
    this.name = name;
    this.code = color;
  }
}

// const c = new Color("lavender", "#E6E6FA");
const allColors = [
  new Color("lavender", "#E6E6FA"),
  new Color("pink", " #ffc0cb"),
  new Color("green", "#008000"),
  new Color("blue", "#007AFF"),
  new Color("palegreen", "#98fb98"),
];

exports.getRandomColor = () => {
  return allColors[Math.floor([Math.random() * allColors.length])];
};

exports.allColors = allColors;
