function onRotate(event) {
  var farmSize;

  farm.setSize();

  farmSize = farm.getSize();
  animalSize = farmSize.width / 12;

  animals.forEach(function(animal) {
    animal.setPosition();
    animal.setSize(animalSize);
  });
}