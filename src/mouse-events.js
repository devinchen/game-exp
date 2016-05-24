var offsetPosition = {
  x: 0,
  y: 0,
};
var targetAnimalIndex = -1;

function onMouseDown(event) {
  var onHitAnimalIndex = [];
  var mouseLeft = event.offsetX;
  var mouseTop = event.offsetY;

  if (animals.length > 0) {
    animals.forEach(function(animal, index) {
      animal.isOnHit(mouseLeft, mouseTop) && onHitAnimalIndex.push(index);
    });
  }

  if (onHitAnimalIndex.length > 0) {
    targetAnimalIndex = onHitAnimalIndex.pop();
    offsetPosition.x = mouseLeft - animals[targetAnimalIndex].x;
    offsetPosition.y = mouseTop - animals[targetAnimalIndex].y;
    canvas.addEventListener('mousemove', onMouseMove);
  }
}

function onMouseMove(event) {
  var animal = animals[targetAnimalIndex];
  var mouseLeft = event.offsetX;
  var mouseTop = event.offsetY;

  animal.x = mouseLeft - offsetPosition.x;
  animal.y = mouseTop - offsetPosition.y;

  animal.stop();
}

function onMouseLeave(event) {
  var targetAnimal = animals[targetAnimalIndex];

  targetAnimal && targetAnimal.resume();
  targetAnimalIndex = -1;
  canvas.removeEventListener('mousemove', onMouseMove);
}