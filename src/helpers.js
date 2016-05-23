function getRandomPosition(context) {
  var maxWidth = context.canvas.width;
  var maxHeight = context.canvas.height;

  return {
    x: Math.round((maxWidth - 60) * Math.random()),
    y: Math.round((maxHeight - 60) * Math.random()),
  };
}