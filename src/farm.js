function Farm(elm) {
  this.canvas = elm;
  this.context = {};

  return this.init();
}

Farm.prototype.init = function() {
  this.context = this.canvas.getContext('2d');
  this.setSize();
};

Farm.prototype.setSize = function() {
  var screenSize = getScreenSize();
  var screenWidth = screenSize.width;
  var screenHeight = screenSize.height;

  if (screenWidth > screenHeight) {
    this.canvas.width = screenWidth * 0.7;
    this.canvas.height = this.canvas.width * 3 / 4;
  } else {
    this.canvas.width = screenWidth * 0.8;
    this.canvas.height = this.canvas.width * 3 / 4;
  }
};

Farm.prototype.getSize = function() {
  return {
    width: this.canvas.clientWidth,
    height: this.canvas.clientHeight,
  };
};