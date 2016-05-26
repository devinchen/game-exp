var canvas = document.getElementById('farm');
var context = canvas.getContext('2d');
var maxAnimals = 12;
var countDownFrom = 12;
var timer = Timer.getInstance();
var textures = getTextures();
var animals = [];
var animalSize = 40;
var index = 0;
var observer;

function isCheckPoint() {
  return timer.time % (countDownFrom / maxAnimals) === 0;
}

function generateAnimal(textureIndex) {
  var randomPosition = getRandomPosition(context);
  var animal = new Animal();

  animal.setTexture(textures[textureIndex]);
  animal.x = randomPosition.x;
  animal.y = randomPosition.y;

  return animal;
}

observer = setInterval(function() {
  if (isCheckPoint() && index < maxAnimals) {
    animals.push(generateAnimal(index));
    index++;
  }

  if (timer.isStop) {
    clearInterval(observer);
  }
}, 1000)

timer.time = countDownFrom;
timer.start();

canvas.addEventListener('touchstart', onTouchStart);
canvas.addEventListener('touchend', onTouchEnd);

(function play() {
  window.requestAnimationFrame(play, canvas);
  context.clearRect(0, 0, canvas.width, canvas.height);

  animals.forEach(function(animal, index) {
    animal.show();
    animal.move();
    animal.draw(context);
  });

  timer.draw(context);
})();