function isCheckPoint() {
  return timer.time % (countDownFrom / maxAnimals) === 0;
}

function getRandomPosition(context) {
  var contextSize = context.getSize();
  var maxWidth = contextSize.width;
  var maxHeight = contextSize.height;
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

function calcAnimalSize(farm) {
  var minSize = 30;
  var ratio = 10;
  var farmSize = farm.getSize();

  if (farmSize.width > farmSize.height) {
    return getCorrectSize(farmSize.height / ratio);
  } else {
    return getCorrectSize(farmSize.width / ratio);
  }

  function getCorrectSize(size) {
    return size < minSize ? minSize : size;
  }
}

function getScreenSize() {
  return {
    width: screen.width,
    height: screen.height
  };
}