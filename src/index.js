var farm = new Farm(document.getElementById('farm'));
var farmDOM = farm.canvas;
var farmContext = farm.context;
var maxAnimals = 12;
var countDownFrom = 12;
var timer = Timer.getInstance();
var textures = getTextures();
var animals = [];
var animalSize = calcAnimalSize(farm);
var index = 0;
var observer;

function generateAnimal(textureIndex) {
  var randomPosition = getRandomPosition(farm);
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

farmDOM.addEventListener('touchstart', onTouchStart);
farmDOM.addEventListener('touchend', onTouchEnd);
screen.orientation.addEventListener('change', onRotate);

(function play() {
  window.requestAnimationFrame(play, farmDOM);
  farm.context.clearRect(0, 0, farmDOM.width, farmDOM.height);

  animals.forEach(function(animal, index) {
    animal.show();
    animal.move();
    animal.draw(farmContext);
  });

  timer.draw(farmContext);
})();