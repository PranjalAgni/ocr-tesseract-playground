const fs = require("fs/promises");
const path = require("path");
const tesseract = require("node-tesseract-ocr");

function getTesseractConfig() {
  return {
    lang: "eng", // default
    oem: 3,
    psm: 7,
  };
}

async function main() {
  const testImagePath = path.resolve(__dirname, "../", "images", "test3.png");

  console.log("Dirname: ", testImagePath);
  const testImage = await fs.readFile(testImagePath);
  console.log(testImage);
  try {
    const text = await tesseract.recognize(testImage);
    console.log("Text: ", text);
  } catch (ex) {
    console.error(ex);
  }
}

main();
