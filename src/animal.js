function Animal() {
  this.x = 0;
  this.y = 0;
  this.vx = Math.random() * 2;
  this.vy = Math.random() * 2;
  this.scale = 0;
  this.texture = '';
  this.textureSize = animalSize;
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
  var width = context.canvas.width;
  var height = context.canvas.height;

  if (this.isStop) {
    return;
  }

  if (this.y > height - this.textureSize || this.y < 0) {
    this.vy *= -1;
  }
  if (this.x > width - this.textureSize || this.x < 0) {
    this.vx *= -1;
  }

  this.x += this.vx;
  this.y += this.vy;
};

Animal.prototype.stop = function() {
  this.isStop = true;
};

Animal.prototype.resume = function() {
  this.isStop = false;
};

Animal.prototype.setTexture = function(texture) {
  var image = new Image();
  image.src = texture;
  this.texture = image;
};

Animal.prototype.draw = function(context) {
  context.save();
  context.translate(this.x, this.y);
  context.scale(this.scale, this.scale);
  context.drawImage(this.texture, 0, 0, this.textureSize, this.textureSize);
  context.restore();
};

Animal.prototype.isOnHit = function(mx, my) {
  return mx > this.x &&
    mx < this.x + this.textureSize &&
    my > this.y &&
    my < this.y + this.textureSize;
};