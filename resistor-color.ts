const colorCode = (color: Color) => {
  return COLORS.indexOf(color)
};

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type Color = typeof COLORS[number]

console.log(colorCode('white'));