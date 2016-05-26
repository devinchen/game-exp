var offsetPosition = {
  x: 0,
  y: 0,
};
var targetAnimalIndex = -1;

function onTouchStart(event) {
  var onHitAnimalIndex = [];
  var touchLeft = event.targetTouches[0].pageX - event.target.offsetLeft;
  var touchTop = event.targetTouches[0].pageY - event.target.offsetTop;

  if (animals.length > 0) {
    animals.forEach(function(animal, index) {
      animal.isOnHit(touchLeft, touchTop) && onHitAnimalIndex.push(index);
    });
  }

  if (onHitAnimalIndex.length > 0) {
    targetAnimalIndex = onHitAnimalIndex.pop();
    offsetPosition.x = touchLeft - animals[targetAnimalIndex].x;
    offsetPosition.y = touchTop - animals[targetAnimalIndex].y;
    farmDOM.addEventListener('touchmove', onTouchMove);
  }
}

function onTouchMove(event) {
  var animal = animals[targetAnimalIndex];
  var canvas = event.target;
  var canvasWidth = canvas.clientWidth;
  var canvasHeight = canvas.clientHeight;
  var canvasLeft = canvas.offsetLeft;
  var canvasRight = canvas.offsetLeft + canvas.width;
  var canvasTop = canvas.offsetTop;
  var canvasBottom = canvas.offsetTop + canvas.height;
  var touchLeft = event.targetTouches[0].pageX;
  var touchTop = event.targetTouches[0].pageY;

  event.preventDefault();
  animal.stop();

  animal.x = touchLeft - canvasLeft - offsetPosition.x;
  animal.y = touchTop - canvasTop - offsetPosition.y;

  if (touchLeft > canvasRight - animalSize + offsetPosition.x) {
    animal.x = canvasWidth - animalSize;
  }

  if (touchLeft < canvasLeft + offsetPosition.x) {
    animal.x = 0;
  }

  if (touchTop > canvasBottom - animalSize + offsetPosition.y) {
    animal.y = canvasHeight - animalSize;
  }

  if (touchTop < canvasTop + offsetPosition.y) {
    animal.y = 0;
  }
}

function onTouchEnd(event) {
  var targetAnimal = animals[targetAnimalIndex];

  targetAnimal && targetAnimal.resume();
  targetAnimalIndex = -1;
  farmDOM.removeEventListener('touchmove', onTouchMove);
}