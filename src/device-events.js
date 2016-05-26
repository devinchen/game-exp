function onRotate(event) {
  var farmSize;

  farm.setSize();
  animalSize = calcAnimalSize(farm);

  animals.forEach(function(animal) {
    animal.setPosition();
    animal.setSize(animalSize);
  });
}