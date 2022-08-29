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

type Color = typeof colorArray[number]

function decodeValue([band1, band2]: Color[]) {
  return colorArray.indexOf(band1) * 10 + colorArray.indexOf(band2);
}

const res = decodeValue(['black', "blue", 'green'])

console.log(res);



