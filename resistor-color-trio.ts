function decodedResistorValue(colors: Color[]) {
  const [color1, color2, color3] = colors;
  const res = (colorArray.indexOf(color1) * 10 + colorArray.indexOf(color2)) * Math.pow(10, colorArray.indexOf(color3));
  if (res < 1000) return `${res} ohms`;
  return `${res / 1000} kiloohms`;
}

const colorArray = [
  `black`,
  `brown`,
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `violet`,
  `grey`,
  `white`,
] as const;

type Color = typeof colorArray[number];

const ex = decodedResistorValue(["orange", "orange", "orange"])

console.log(ex);


