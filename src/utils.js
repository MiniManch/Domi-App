// utils.js
export default function generateRandomAttributes(imageList) {
  const squareWidth = 15; // vw for square images
  const rectangleWidth = 10; // vw for rectangle images
  const gap = 2; // vw gap between images

  const squares = imageList.filter((image) => image.aspect === 'square');
  const rectangles = imageList.filter((image) => image.aspect === 'rectangle');

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const positionedImages = [];

  // Shuffle the arrays of squares and rectangles
  const shuffledSquares = shuffleArray(squares);
  const shuffledRectangles = shuffleArray(rectangles);

  // Position square images
  shuffledSquares.forEach((square, index) => {
    const row = Math.floor(index / 5); // Adjust the number 5 as desired to control the number of squares per row
    const col = index % 5; // Adjust the number 5 as desired to control the number of squares per row

    const left = col * (squareWidth + gap);
    const top = row * (squareWidth + gap);

    positionedImages.push({ ...square, top, left });
  });

  // Position rectangle images
  shuffledRectangles.forEach((rectangle, index) => {
    const row = Math.floor(index / 5); // Adjust the number 5 as desired to control the number of rectangles per row
    const col = index % 5; // Adjust the number 5 as desired to control the number of rectangles per row

    const left = col * (rectangleWidth + gap);
    const top = Math.min(row * (rectangleWidth + gap), 10);

    positionedImages.push({ ...rectangle, top, left });
  });

  return positionedImages;
}
