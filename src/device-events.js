function onRotate(event) {
  var oldFarmSize = farm.getSize();
  var newFarmSize;
  var farmScale;

  farm.setSize();
  newFarmSize = farm.getSize();
  animalSize = calcAnimalSize(farm);

  farmScale = newFarmSize.width / oldFarmSize.width;

  animals.forEach(function(animal) {
    animal.setPositionByRatio(farmScale);
    animal.setSize(animalSize);
  });
}