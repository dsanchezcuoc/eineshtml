const sharp = require("sharp");

const sizes = [320, 480, 640, 800, 960, 1200, 1280]; //Les versions base són 320, 480, 640, 800 i 1200. Per fer versions 2X, genero/utilitzo les versions 640, 960 i 1280. No les faig més grans pq superen la mida original de les imatges.

const images = [
  {
    input: "src/originals/menorca-nova1.jpg",
    output: "src/images/menorca1"
  },
  {
    input: "src/originals/andorra-nova1.jpeg",
    output: "src/images/andorra1"
  },
  {
    input: "src/originals/suissa-nova1.jpg",
    output: "src/images/suissa1"
  }
  ,
  {
    input: "src/originals/suissa-nova2.webp",
    output: "src/images/suissa2"
  }
  ,
  {
    input: "src/originals/suissa-nova3.jpeg",
    output: "src/images/suissa3"
  }
  ,
  {
    input: "src/originals/malta-nova1.jpg",
    output: "src/images/malta1"
  }
  ,
  {
    input: "src/originals/malta-nova2.jpg",
    output: "src/images/malta2"
  }
  ,
  {
    input: "src/originals/malta-nova3.jpg",
    output: "src/images/malta3"
  }
  ,
  {
    input: "src/originals/malta-index-clip.jpg",
    output: "src/images/malta-index-clip"
  }
];

for (const image of images) {
  for (const size of sizes) {
    sharp(image.input)
      .resize({ width: size })
      //.webp({ quality: 80 })
      .toFile(`${image.output}-${size}.webp`);
  }
}