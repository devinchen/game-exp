function getRandomPosition(context) {
  var maxWidth = context.canvas.width;
  var maxHeight = context.canvas.height;
  var randomX = Math.round(maxWidth * Math.random());
  var randomY = Math.round(maxHeight * Math.random());

  if (randomX > maxWidth - animalSize) {
    randomX = maxWidth - animalSize;
  }

  if (randomY > maxHeight - animalSize) {
    randomY = maxHeight - animalSize;
  }

  return {
    x: randomX,
    y: randomY,
  };
}