function Animal() {
  this.x = 0;
  this.y = 0;
  this.label = '';
  this.speed = Math.random() * 10;
  this.isStop = false;
}

Animal.prototype.move = function() {
  if (this.isStop) {
    return;
  }

  this.x += this.speed;
  this.y += this.speed;
};

Animal.prototype.stop = function() {
  this.isStop = true;
};

Animal.prototype.draw = function(context) {
  if (this.isOutsideBoundary(context)) {
    this.speed *= -1;
  }

  this.move();

  context.save();
  context.translate(this.x, this.y);
  context.fillStyle = 'gray';
  context.fillText(this.label, this.x, this.y);
  context.fillRect(0,0,25,25);
  context.restore();
};

Animal.prototype.isOutsideBoundary = function(context) {
  var width = context.canvas.width;
  var height = context.canvas.height;

  return (
    this.x < 0 ||
    this.y < 0 ||
    this.x > width ||
    this.y > height
  );
};