var Timer = (function() {
  var instance;

  function createInstance() {
    return {
      font: '20px Arial',
      fontColor: 'blue',
      time: 0,
      draw: function(context) {
        context.save();
        context.font = this.font;
        context.fillText(this.time, 100, 100);
        context.restore();
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();