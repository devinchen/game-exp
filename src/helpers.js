function getRandomPosition(context) {
  var maxWidth = context.canvas.width;
  var maxHeight = context.canvas.height;

  return {
    x: Math.round(maxWidth * Math.random()),
    y: Math.round(maxHeight * Math.random()),
  };
}