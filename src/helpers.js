function getRandomPosition(context) {
  var maxWidth = context.canvas.width;
  var maxHeight = context.canvas.height;
  var randomX = Math.round(maxWidth * Math.random());
  var randomY = Math.round(maxHeight * Math.random());
  var borderSize = 15;
  var animalSize = 50;

  if (randomX < borderSize) {
    randomX = borderSize;
  } else if (randomX > maxWidth - borderSize - animalSize) {
    randomX = maxWidth - borderSize - animalSize;
  }

  if (randomY < borderSize) {
    randomY = borderSize;
  } else if (randomY > maxHeight - borderSize - animalSize) {
    randomY = maxHeight - borderSize - animalSize;
  }

  return {
    x: randomX,
    y: randomY,
  };
}