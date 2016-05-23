function Animal() {
  this.x = 0;
  this.y = 0;
  this.scale = 0;
  this.texture = '';
  this.speed = Math.random() * 1;
  this.isStop = false;
  this.isShow = false;
}

Animal.prototype.show = function() {
  if (this.isShow) {
    return;
  }

  if (this.scale < 1) {
    this.scale += 0.1;
  } else {
    this.isShow = true;
  }
};

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

Animal.prototype.setTexture = function(texture) {
  var image = new Image();
  image.src = texture;
  this.texture = image;
};

Animal.prototype.draw = function(context) {
  if (this.isOutsideBoundary(context)) {
    this.speed *= -1;
  }

  context.save();
  context.translate(this.x, this.y);
  context.scale(this.scale, this.scale);
  context.drawImage(this.texture, 0, 0, 60, 60);
  context.restore();
};

Animal.prototype.isOutsideBoundary = function(context) {
  var width = context.canvas.width;
  var height = context.canvas.height;

  return (
    this.x < 0 ||
    this.y < 0 ||
    this.x > width - 60 ||
    this.y > height - 60
  );
};