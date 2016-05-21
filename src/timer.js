var Timer = (function() {
  var instance;

  function createInstance() {
    var countdown;

    return {
      font: '20px Arial',
      fontColor: 'blue',
      time: 0,

      start: function() {
        countdown = setInterval(function() {
          this.time -= 1;

          if (this.time === 0) {
            clearInterval(countdown);
          }
        }.bind(this), 1000);
      },

      pause: function() {
        clearInterval(countdown);
      },

      resume: function() {
        this.start();
      },

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