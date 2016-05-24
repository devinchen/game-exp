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
    canvas.addEventListener('touchmove', onTouchMove);
  }
}

function onTouchMove(event) {
  var animal = animals[targetAnimalIndex];
  var touchLeft = event.targetTouches[0].pageX - event.target.offsetLeft;
  var touchTop = event.targetTouches[0].pageY - event.target.offsetTop;

  animal.x = touchLeft - offsetPosition.x;
  animal.y = touchTop - offsetPosition.y;

  animal.stop();
}

function onTouchEnd(event) {
  var targetAnimal = animals[targetAnimalIndex];

  targetAnimal && targetAnimal.resume();
  targetAnimalIndex = -1;
  canvas.removeEventListener('touchmove', onTouchMove);
}